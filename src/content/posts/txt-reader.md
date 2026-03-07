---
title: TXT Reader Integration
published: 2026-03-07
description: Notes on the embedded TXT reader and how to use it in Markdown posts.
tags: [TXT, Markdown, Reader]
category: Notes
draft: false
---

I integrated a **TXT reader** into the blog, so `.txt` files can now be embedded and read directly inside Markdown posts.

## Usage

Add this tag in your article:

```html
<txt src="/files/example.txt" title="TXT Demo" height="560"></txt>
```

- `src`: TXT file path (required)
- `title`: Reader title (optional)
- `height`: Viewer height (optional)

## TXT file location

Place TXT files under: `public/files/`

For example:

- Local file: `public/files/example.txt`
- URL in Markdown: `/files/example.txt`

## Large file support

The reader streams and renders text progressively, which helps keep scrolling and interaction smooth even for very large files.

## Example

<txt src="/files/example.txt" title="TXT Demo" height="560"></txt>
