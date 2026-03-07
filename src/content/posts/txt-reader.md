---
title: TXT 阅读器：沉浸式使用说明
published: 2026-03-07
description: 一份中文指南：如何在 Markdown 中优雅嵌入 TXT 阅读器，并获得更好的阅读体验。
tags: [TXT, 阅读器, Markdown]
category: Notes
draft: false
permalink: txt-reader-guide
---

想把小说、歌词、台词本、日志片段直接放进文章里读？
现在你可以用 `txt` 组件，把纯文本文件嵌入到文章页面，像“在线阅读页”一样丝滑浏览。

## 一、最基础写法

在 Markdown 里直接写：

```html
<txt src="/files/example.txt" title="示例文本" height="620"></txt>
```

## 二、参数说明

- `src`（必填）：TXT 文件地址（放在 `public/files/` 下最稳妥）
- `title`（可选）：阅读器顶部显示的标题
- `height`（可选）：嵌入高度（单位 px）

## 三、文件怎么放

建议目录：

- 本地文件：`public/files/你的文件.txt`
- 页面地址：`/files/你的文件.txt`

## 四、推荐阅读姿势

组件下方会自动生成两个入口：

- **沉浸阅读**：进入专门的 TXT Reader 页面（推荐）
- **新标签打开原文**：直接查看 TXT 原文件

如果你的文件路径有中文或特殊符号，也可以放心使用；阅读器会自动处理 URL 编码。

## 五、小提醒

- 文本很大时也能流式加载，不必一次性卡住页面。
- 支持关键词搜索与上下跳转。
- 建议一行不要过长，阅读观感会更好。

愿每一段文字，都能被认真读完。
