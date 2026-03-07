---
title: TXT Reader Imported
published: 2026-03-07
description: A quick note about the new TXT reader and how to embed text files in posts.
tags: [TXT, Markdown, Reader]
category: Notes
draft: false
---

I have imported a **TXT reader** into the blog.
Now plain text files can be embedded directly in Markdown posts.

## Usage

```html
<txt src="/files/example.txt" title="TXT Demo" height="560"></txt>
```

- `src`: TXT file path (required)
- `title`: reader title (optional)
- `height`: viewer height (optional)

## Where to place TXT files

Put TXT files in `public/files/`.

For example:

- local file: `public/files/example.txt`
- markdown URL: `/files/example.txt`

## Demo

<txt src="/files/example.txt" title="TXT Demo" height="560"></txt>
