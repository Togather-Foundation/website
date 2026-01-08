# Togather Foundation Website

A simple, fast website built with [Hugo](https://gohugo.io/) and styled with [Pico CSS](https://picocss.com/).

## 🚀 Quick Start

### Prerequisites

- [Hugo](https://gohugo.io/installation/) v0.123.0 or later

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Togather-Foundation/website.git
   cd website
   ```

2. **Start the development server**
   ```bash
   hugo server -D
   ```

3. **View the site**
   Open [http://localhost:1313/website/](http://localhost:1313/website/) in your browser

## 📝 Creating Content

### Add a New News Item

```bash
hugo new news/my-announcement.md
```

Edit `content/news/my-announcement.md` and set `draft: false` when ready to publish.

### Front Matter Example

```yaml
---
title: "My Announcement"
date: 2025-11-27
draft: false
description: "Brief description"
---

Your content here in Markdown.

<!--more-->

Content after this line is hidden in summaries.
```

## 📁 Site Structure

```
content/
├── _index.md              # Homepage
├── ecosystem.md           # Ecosystem overview
└── news/                  # News
    ├── _index.md
    ├── welcome.md         # Example post
    └── getting-started.md # Example post
```

## 🚢 Deployment

This site automatically deploys to **GitHub Pages** via GitHub Actions on every push to the `main` branch.

### Setup GitHub Pages (One-time)

1. Go to repository **Settings** → **Pages**
2. Under "Build and deployment", select **Source: GitHub Actions**
3. Save

### Deploy

Simply push to `main`:

```bash
git push origin main
```

The site will build and deploy automatically in ~1 minute.

## 🎨 Styling

This site uses **Pico CSS (Amber theme)** for beautiful, responsive styling with zero configuration.

Custom CSS is in `themes/minimal/assets/css/main.css`.

## 📖 Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
  - [Hosting on Github Pages](https://gohugo.io/host-and-deploy/host-on-github-pages/) 
- [Pico CSS Documentation](https://picocss.com/docs)
- [Markdown Guide](https://www.markdownguide.org/)

---

Built with Hugo + Pico CSS
