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

- `src`: TXT file path (**required**)
- `title`: Reader title (optional)
- `height`: Viewer height (optional)

## TXT file location

Place TXT files under: `public/files/`

For example:

- Local file: `public/files/example.txt`
- URL in Markdown: `/files/example.txt`

## Reader links (must include `src`)

When opening the standalone reader directly, include the source parameter:

```text
/txt-reader.html?src=/files/example.txt&title=TXT%20Demo
```

If `src` is missing, the reader cannot load any article content.

## Large file support

The reader streams and renders text progressively, keeping the UI responsive even for multi-million-character TXT files.

## Example

<txt src="/files/example.txt" title="TXT Demo" height="620"></txt>
