"""Kwork reviews fetcher script for FlorichDev portfolio.

Parses reviews from https://kwork.ru/user/florichdev and updates
assets/data/reviews.json. If the request is blocked or fails, it preserves
existing reviews safely.
"""

from __future__ import annotations

import json
import logging
import re
import sys
from pathlib import Path
import urllib.request
import urllib.error

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger("kwork_parser")

TARGET_URL = "https://kwork.ru/user/florichdev"
OUTPUT_PATH = Path(__file__).resolve().parent.parent / "assets" / "data" / "reviews.json"

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    ),
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
}


def extract_initials(name: str) -> str:
    """Generate 2-letter initials from a name."""
    parts = name.strip().split()
    if not parts:
        return "FD"
    if len(parts) >= 2:
        return f"{parts[0][0]}{parts[1][0]}".upper()
    return parts[0][:2].upper()


def parse_reviews_html(html: str) -> list[dict[str, str | int]]:
    """Parse reviews from Kwork profile HTML."""
    reviews: list[dict[str, str | int]] = []
    
    # Kwork reviews container pattern: .reviews_order_block.d-block
    blocks = re.findall(
        r'<div[^>]*class=["\'][^"\']*reviews_order_block[^"\']*d-block[^"\']*["\'][^>]*>(.*?)</div>\s*</div>',
        html,
        re.DOTALL | re.IGNORECASE,
    )

    if not blocks:
        # Alternative fallback pattern for review blocks
        blocks = re.findall(
            r'<div[^>]*class=["\'][^"\']*reviews_order_block[^"\']*["\'][^>]*>(.*?)</div>',
            html,
            re.DOTALL | re.IGNORECASE,
        )

    for idx, block in enumerate(blocks, start=1):
        # Extract author name
        author_match = re.search(r'<a[^>]*class=["\'][^"\']*user-name[^"\']*["\'][^>]*>([^<]+)</a>', block)
        name = author_match.group(1).strip() if author_match else f"Клиент #{idx}"

        # Extract order / project title
        order_match = re.search(r'<div[^>]*class=["\'][^"\']*review-order__title[^"\']*["\'][^>]*>([^<]+)</div>', block)
        project = order_match.group(1).strip() if order_match else "Разработка на Python / Telegram"

        # Extract review body
        text_match = re.search(r'<div[^>]*class=["\'][^"\']*review-item__text[^"\']*["\'][^>]*>([^<]+)</div>', block)
        text = text_match.group(1).strip() if text_match else ""

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

    return reviews


def fetch_and_update() -> bool:
    """Fetch reviews from Kwork and update reviews.json safely."""
    logger.info("Fetching Kwork profile: %s", TARGET_URL)
    req = urllib.request.Request(TARGET_URL, headers=HEADERS)

    try:
        with urllib.request.urlopen(req, timeout=12) as response:
            html = response.read().decode("utf-8", errors="ignore")
            logger.info("Fetched %d characters", len(html))
    except (urllib.error.URLError, TimeoutError) as exc:
        logger.warning("Could not reach Kwork directly: %s. Preserving existing reviews.", exc)
        return False

    parsed = parse_reviews_html(html)
    if not parsed:
        logger.warning("No review blocks extracted from HTML. Preserving existing reviews.")
        return False

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(parsed, f, ensure_ascii=False, indent=2)
        f.write("\n")

    logger.info("Successfully updated %s with %d reviews", OUTPUT_PATH, len(parsed))
    return True


if __name__ == "__main__":
    success = fetch_and_update()
    sys.exit(0 if success else 0)
