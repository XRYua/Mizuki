---
title: TXT Reader 使用教程
published: 2026-03-07
description: 这是一篇教程文章，教你如何在 Markdown 里嵌入 TXT 阅读器。
tags: [TXT, Markdown, 教程]
category: Notes
draft: false
permalink: txt-reader-guide
---

这是一篇**教程页**，用于说明 TXT Reader 的接入方式，不会自动跳转到阅读器页面。

## 功能简介

TXT Reader 可以让你在文章内直接阅读 `.txt` 文件，并提供行级渲染与关键词检索能力。

## 基础写法

在 Markdown 中使用自定义标签：

```html
<txt src="/files/example.txt" title="示例文本" height="560"></txt>
```

## 参数说明

- `src`（必填）：TXT 文件的公开路径。
- `title`（可选）：阅读器显示标题。
- `height`（可选）：嵌入高度，单位 px。

## 文件放置位置

建议将文本文件放在 `public/files/` 下。

例如：

- 本地路径：`public/files/example.txt`
- 引用地址：`/files/example.txt`

## 使用建议

- 阅读器支持大文本加载与站内检索。
- 路径中如有空格、中文或特殊符号，请确保 URL 编码正确。
- 如果只是发布教程，请链接到本页；如果要直接阅读，再单独使用 `/txt-reader.html?...` 链接。
