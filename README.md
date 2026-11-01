# Chris 的博客

静态博客，使用 [Retypeset](https://github.com/radishzzz/astro-theme-retypeset) 主题（MIT），部署在 GitHub Pages：https://iwewnk0426.github.io

## 本地开发

需要 [pnpm](https://pnpm.io/)。

```bash
pnpm install
pnpm dev
```

## 发布文章

在 `src/content/posts/` 添加 Markdown。`title` 和 `published` 必填，`description` 可选。推送到 `main` 后，GitHub Actions 会自动构建并部署。

```md
---
title: 标题
published: 2026-11-01
description: 可选的简介
---

正文写在这里。
```

RSS：[/rss.xml](https://iwewnk0426.github.io/rss.xml)
