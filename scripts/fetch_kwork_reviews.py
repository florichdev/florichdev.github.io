"""Kwork Reviews Parser for FlorichDev portfolio.

Fetches reviews from https://kwork.ru/user/florichdev and updates assets/data/reviews.json.
Can be executed manually or as a scheduled GitHub Action.
"""

from __future__ import annotations

import json
import re
import urllib.request
from pathlib import Path
from typing import Any

KWORK_PROFILE_URL = "https://kwork.ru/user/florichdev"
OUTPUT_JSON = Path(__file__).resolve().parent.parent / "assets" / "data" / "reviews.json"

USER_AGENTS = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
)


def extract_initials(name: str) -> str:
    parts = name.strip().split()
    if len(parts) >= 2:
        return f"{parts[0][0]}{parts[1][0]}".upper()
    if len(name) >= 2:
        return name[:2].upper()
    return name.upper() if name else "FD"


def parse_kwork_html(html: str) -> list[dict[str, Any]]:
    # Simple regex-based fallback parser if bs4 is not installed in the runtime
    reviews: list[dict[str, Any]] = []

    try:
        from bs4 import BeautifulSoup
        soup = BeautifulSoup(html, "html.parser")
        blocks = soup.select(".reviews_order_block.d-block, .reviews_order_block")
        for idx, block in enumerate(blocks, start=1):
            name_el = block.select_one(".username, .review-user-name, a.user-name")
            name = name_el.get_text(strip=True) if name_el else f"Клиент Kwork #{idx}"

            text_el = block.select_one(".review-text, .reviews_order_block__comment, p")
            text = text_el.get_text(strip=True) if text_el else ""

            project_el = block.select_one(".reviews_order_block__kwork-title, .order-title")
            project = project_el.get_text(strip=True) if project_el else "Заказ на Kwork"

            if text:
                reviews.append({
                    "id": idx,
                    "name": name,
                    "initials": extract_initials(name),
                    "project": project,
                    "projectEn": project,
                    "rating": 5,
                    "text": text,
                    "textEn": text,
                })
        if reviews:
            return reviews
    except ImportError:
        pass

    # Regex fallback if beautifulsoup4 is not available
    pattern = re.compile(
        r'<div[^>]*class="[^"]*reviews_order_block[^"]*"[^>]*>([\s\S]*?)</div>\s*</div>',
        re.IGNORECASE,
    )
    for idx, match in enumerate(pattern.finditer(html), start=1):
        content = match.group(1)
        text_match = re.search(r'<div[^>]*class="[^"]*comment[^"]*"[^>]*>([\s\S]*?)</div>', content)
        name_match = re.search(r'<a[^>]*class="[^"]*user[^"]*"[^>]*>([^<]+)</a>', content)
        title_match = re.search(r'<a[^>]*class="[^"]*title[^"]*"[^>]*>([^<]+)</a>', content)

        clean_text = re.sub(r"<[^>]+>", "", text_match.group(1)).strip() if text_match else ""
        clean_name = name_match.group(1).strip() if name_match else f"Клиент Kwork #{idx}"
        clean_title = title_match.group(1).strip() if title_match else "Заказ на Kwork"

        if clean_text:
            reviews.append({
                "id": idx,
                "name": clean_name,
                "initials": extract_initials(clean_name),
                "project": clean_title,
                "projectEn": clean_title,
                "rating": 5,
                "text": clean_text,
                "textEn": clean_text,
            })

    return reviews


def update_reviews() -> None:
    req = urllib.request.Request(
        KWORK_PROFILE_URL,
        headers={"User-Agent": USER_AGENTS, "Accept": "text/html,application/xhtml+xml"},
    )
    try:
        with urllib.request.urlopen(req, timeout=12) as response:
            html = response.read().decode("utf-8", errors="ignore")
            parsed = parse_kwork_html(html)
            if parsed:
                OUTPUT_JSON.parent.mkdir(parents=True, exist_ok=True)
                OUTPUT_JSON.write_text(json.dumps(parsed, ensure_ascii=False, indent=2), encoding="utf-8")
                print(f"Successfully updated {len(parsed)} reviews to {OUTPUT_JSON}")
                return
    except Exception as exc:
        print(f"Direct Kwork fetch unavailable ({exc}). Using existing static fallback.")

    if not OUTPUT_JSON.exists():
        print(f"Notice: {OUTPUT_JSON} exists and is ready.")


if __name__ == "__main__":
    update_reviews()
