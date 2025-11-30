---
title: "Getting Started with Hugo"
date: 2025-11-26
draft: false
description: "Quick guide to creating content"
---

This site is built with Hugo, a fast static site generator.

<!--more-->

## Creating Content

To add a new announcement:

```bash
hugo new posts/my-announcement.md
```

Then edit the file in `content/posts/` and set `draft: false` when ready to publish.

## Running Locally

Start the development server:

```bash
hugo server -D
```

Your site will be available at `http://localhost:1313/website/`
