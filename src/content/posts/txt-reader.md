---
title: TXT Reader Integration
published: 2026-03-07
description: A Markdown tutorial in English on how to embed and use the TXT Reader.
tags: [TXT, Markdown, Reader]
category: Notes
draft: false
---

This is an English Markdown tutorial for the TXT Reader integration.

## What this feature does

The TXT Reader lets you open and read `.txt` files directly inside a blog post.

## Basic syntax

Use the custom tag below inside Markdown:

```html
<txt src="/files/example.txt" title="TXT Demo" height="560"></txt>
```

## Parameters

- `src` (required): the public path to your txt file.
- `title` (optional): displayed as the reader title.
- `height` (optional): iframe height in pixels.

## File placement

Put txt files under `public/files/`.

Example mapping:

- Local file: `public/files/example.txt`
- URL in markdown: `/files/example.txt`

## Notes

- The reader supports large files and in-page keyword search.
- Keep paths URL-safe (especially for spaces and special symbols).
- If your file includes non-ASCII characters in the path, always use proper URL encoding when building links manually.
