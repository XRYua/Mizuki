---
title: 我导入了 TXT 阅读器
published: 2026-03-07
description: 记录一下博客里新增的 TXT 文件在线阅读功能与使用方式。
tags: [TXT, Markdown, Reader]
category: Notes
draft: false
---

最近我给博客导入了 **TXT 阅读器**，现在可以在 Markdown 文章中直接嵌入 `.txt` 文件进行在线阅读。

## 用法

在文章里写：

```html
<txt src="/files/example.txt" title="TXT Demo" height="560"></txt>
```

- `src`：TXT 文件路径（必填）
- `title`：阅读器标题（可选）
- `height`：阅读区域高度（可选）

## TXT 文件放置位置

请把 TXT 文件放在：`public/files/` 目录。

例如：

- 本地文件：`public/files/example.txt`
- 文章里引用地址：`/files/example.txt`

## 示例

<txt src="/files/example.txt" title="TXT Demo" height="560"></txt>
