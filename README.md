# Knox 的博客

静态博客，使用 [Astro Theme Pure](https://github.com/cworld1/astro-theme-pure)（Apache-2.0），部署在 GitHub Pages：https://iwewnk0426.github.io

## 本地开发

主题使用 [Bun](https://bun.com/get)。需要 Node.js 22.12 或更高版本。

```bash
bun install
bun dev
```

## 发布文章

在 `src/content/blog/` 添加 Markdown。`title`（最多 60 字）、`description`（最多 160 字）和 `publishDate` 必填。推送到 `main` 后，GitHub Actions 会自动构建并部署。

```md
---
title: 标题
description: 简介
publishDate: 2026-11-01
---

正文写在这里。行内公式用 $...$，独立公式用 $$...$$。
```

RSS：[/rss.xml](https://iwewnk0426.github.io/rss.xml)
