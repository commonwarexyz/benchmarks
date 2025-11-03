#!/usr/bin/env python3
"""
Remove benchmark series (by name) that haven't been updated in the specified
number of days. This identifies "stale" benchmarks that are no longer being
actively updated and removes all instances of them.

Usage
-----
    clean.sh path/to/benchmark.js <days>
"""
from __future__ import annotations

import json
import pathlib
import re
import sys
import time
from typing import Dict, Tuple


def load_js_json(text: str) -> Tuple[str, dict]:
    """
    Strip the leading `window.BENCHMARK_DATA =` JavaScript assignment
    and return the prefix (to keep when writing back) and the parsed JSON.
    """
    m = re.match(r"^(.*?=)\s*(\{.*\})\s*$", text, re.S)
    if not m:
        raise ValueError("File does not look like BENCHMARK_DATA JS")
    return m.group(1).rstrip(), json.loads(m.group(2))


def find_stale_benchmarks(data: dict, max_age_days: int) -> set[str]:
    """
    Find benchmark names that haven't been updated within max_age_days.
    Returns a set of stale benchmark names.
    """
    cutoff_ms = int((time.time() - max_age_days * 86400) * 1000)

    # Track the most recent date each benchmark name was seen
    benchmark_last_seen: Dict[str, int] = {}

    # First pass: find the most recent date for each benchmark name
    for pkg_entries in data["entries"].values():
        for entry in pkg_entries:
            entry_date = entry.get("date", 0)
            for bench in entry.get("benches", []):
                bench_name = bench.get("name", "")
                if bench_name:
                    # Track the most recent date this benchmark was seen
                    if bench_name not in benchmark_last_seen:
                        benchmark_last_seen[bench_name] = entry_date
                    else:
                        benchmark_last_seen[bench_name] = max(
                            benchmark_last_seen[bench_name], entry_date
                        )

    # Identify stale benchmarks (haven't been updated recently)
    stale_benchmarks = {
        name
        for name, last_seen in benchmark_last_seen.items()
        if last_seen < cutoff_ms
    }

    return stale_benchmarks


def remove_stale_benchmarks(data: dict, stale_names: set[str]) -> None:
    """
    Remove all instances of stale benchmark names from all entries in-place.
    """
    for pkg_entries in data["entries"].values():
        for entry in pkg_entries:
            if "benches" in entry:
                entry["benches"] = [
                    bench
                    for bench in entry["benches"]
                    if bench.get("name", "") not in stale_names
                ]


def main(path: str, max_age_days: int) -> None:
    p = pathlib.Path(path)
    raw = p.read_text(encoding="utf-8")
    prefix, data = load_js_json(raw)
    stale_benchmarks = find_stale_benchmarks(data, max_age_days)

    if stale_benchmarks:
        print(f"Removing {len(stale_benchmarks)} stale benchmark(s):")
        for bench_name in sorted(stale_benchmarks):
            print(f"  - {bench_name}")
    else:
        print("No stale benchmarks found.")

    remove_stale_benchmarks(data, stale_benchmarks)
    # Preserve Unicode characters (e.g. '±') instead of escaping them.
    p.write_text(f"{prefix} {json.dumps(data, indent=2, ensure_ascii=False)}\n",
                 encoding="utf-8")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        sys.exit("Usage: clean.sh path/to/benchmark.js <days>")
    try:
        days = int(sys.argv[2])
        if days < 0:
            sys.exit("Error: days must be a non-negative integer")
    except ValueError:
        sys.exit("Error: days must be a valid integer")
    main(sys.argv[1], days)
