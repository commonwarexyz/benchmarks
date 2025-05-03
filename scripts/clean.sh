#!/usr/bin/env python3
"""
Remove benchmark entries whose `name` field contains any of the
substring filters supplied on the command line.

Usage
-----
    clean.sh path/to/benchmark.js "n=5 t=3" "n=20 t=13" ...
"""
from __future__ import annotations

import json
import pathlib
import re
import sys
from typing import List, Tuple


def load_js_json(text: str) -> Tuple[str, dict]:
    """
    Strip the leading `window.BENCHMARK_DATA =` JavaScript assignment
    and return the prefix (to keep when writing back) and the parsed JSON.
    """
    m = re.match(r"^(.*?=)\s*(\{.*\})\s*$", text, re.S)
    if not m:
        raise ValueError("File does not look like BENCHMARK_DATA JS")
    return m.group(1).rstrip(), json.loads(m.group(2))


def filter_benches(data: dict, filters: List[str]) -> None:
    """Remove unwanted benchmarks in-place."""
    for pkg_entries in data["entries"].values():
        for entry in pkg_entries:
            entry["benches"] = [
                bench
                for bench in entry.get("benches", [])
                if not any(f in bench["name"] for f in filters)
            ]


def main(path: str, filters: List[str]) -> None:
    p = pathlib.Path(path)
    raw = p.read_text(encoding="utf-8")
    prefix, data = load_js_json(raw)
    filter_benches(data, filters)
    # Preserve Unicode characters (e.g. '±') instead of escaping them.
    p.write_text(f"{prefix} {json.dumps(data, indent=2, ensure_ascii=False)}\n",
                 encoding="utf-8")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        sys.exit("Usage: clean_bench.py path/to/benchmark.js <filter> [<filter> ...]")
    main(sys.argv[1], sys.argv[2:])
