#!/usr/bin/env python3
"""Bouwt boardroomcoach/index.html (los te openen of via GitHub Pages)
en optioneel een fragment zonder documentskelet (voor publicatie als Artifact).

Gebruik:  python3 boardroomcoach/build.py [pad-naar-fragment.html]
"""
import pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parent
SRC = ROOT / "src"
JS_ORDER = ["content-concepts.js", "content-items1.js", "content-items2.js", "content-sims.js", "app-core.js", "app-ui.js"]

head = """<title>Boardroomcoach</title>
<meta name="description" content="Speelse, adaptieve leerapp om bedrijfskunde te leren en zelfverzekerder mee te praten met directeuren en bestuurders.">
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,650;12..96,700;12..96,800&family=IBM+Plex+Mono:wght@500;600&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap">
<style>
""" + (SRC / "style.css").read_text(encoding="utf-8") + "\n</style>\n"

body = """<header class="topbar" id="topbar"></header>
<main id="app" aria-live="off"><noscript>Deze app heeft JavaScript nodig.</noscript></main>
<script>
""" + "\n".join((SRC / f).read_text(encoding="utf-8") for f in JS_ORDER) + "\n</script>\n"


full = ('<!DOCTYPE html>\n<html lang="nl">\n<head>\n<meta charset="UTF-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
        + head + '</head>\n<body>\n' + body + '</body>\n</html>\n')
(ROOT / "index.html").write_text(full, encoding="utf-8")
print("geschreven:", ROOT / "index.html", len(full), "bytes")

if len(sys.argv) > 1:
    frag = head + body
    pathlib.Path(sys.argv[1]).write_text(frag, encoding="utf-8")
    print("fragment:", sys.argv[1], len(frag), "bytes")
