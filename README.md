# Togather Foundation Website

A minimal, fast, and modern website built with [Hugo](https://gohugo.io/) and styled with [Pico CSS](https://picocss.com/).

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
   Open [http://localhost:1313](http://localhost:1313) in your browser

## 📝 Creating Content

### Create a New Page

```bash
hugo new about.md
```

Edit `content/about.md` and set `draft: false` when ready to publish.

### Create a New Blog Post

```bash
hugo new posts/my-post-title.md
```

Edit `content/posts/my-post-title.md` with your content.

### Front Matter Fields

All content files start with YAML front matter:

```yaml
---
title: "Your Page Title"
date: 2025-11-27
draft: false           # Set to false to publish
description: "SEO description"
tags: ["tag1", "tag2"] # For posts
author: "Author Name"  # For posts
---
```

### Markdown Content

After the front matter, write your content in Markdown:

```markdown
# Heading 1
## Heading 2

Regular paragraph text.

- List item 1
- List item 2

**Bold text** and *italic text*

[Link text](https://example.com)

![Image alt text](/images/photo.jpg)
```

## 🎨 Styling

This site uses **Pico CSS (Amber theme)** which provides beautiful, responsive styling automatically for semantic HTML5 elements.

### Available CSS Variables

Pico CSS uses CSS variables that you can customize in `themes/minimal/assets/css/main.css`:

- `--pico-primary-color`
- `--pico-muted-color`
- `--pico-border-color`
- And many more...

See [Pico CSS documentation](https://picocss.com/docs) for full reference.

### Custom CSS

Minimal custom CSS is in `themes/minimal/assets/css/main.css`. Only add custom styles when absolutely necessary - let Pico handle most styling.

## 📁 Project Structure

```
.
├── content/              # All your content (pages, posts)
│   ├── _index.md        # Home page content
│   ├── about.md         # About page
│   └── posts/           # Blog posts
├── themes/minimal/       # Theme files
│   ├── layouts/         # HTML templates
│   └── assets/css/      # Minimal custom CSS
├── static/              # Static files (images, PDFs, etc.)
├── hugo.toml            # Site configuration
└── .github/workflows/   # GitHub Actions for deployment
```

## ⚙️ Configuration

Edit `hugo.toml` to customize your site:

```toml
baseURL = 'https://togather-foundation.github.io/website/'
languageCode = 'en-us'
title = 'Togather Foundation'
theme = 'minimal'

[params]
  description = "Your site description for SEO"
```

### Adding Menu Items

Add custom navigation links in `hugo.toml`:

```toml
[[menus.main]]
  name = "Blog"
  url = "/posts/"
  weight = 1

[[menus.main]]
  name = "Contact"
  url = "/contact/"
  weight = 2
```

## 🚢 Deployment

This site automatically deploys to **GitHub Pages** via GitHub Actions on every push to the `main` branch.

### Setup GitHub Pages (One-time)

1. Go to repository **Settings** → **Pages**
2. Under "Build and deployment", select **Source: GitHub Actions**
3. Save

### Deploy

Simply merge to `main`:

```bash
git checkout main
git merge your-branch
git push origin main
```

The site will build and deploy automatically in ~1 minute.

## 📚 Hugo Basics

### Common Commands

```bash
# Start dev server with drafts
hugo server -D

# Build production site
hugo --gc --minify

# Create new content from archetype
hugo new posts/my-post.md

# Check Hugo version
hugo version
```

### Content Organization

- **Pages**: `/content/page-name.md` → `yoursite.com/page-name/`
- **Posts**: `/content/posts/post-name.md` → `yoursite.com/posts/post-name/`
- **Home**: `/content/_index.md` → `yoursite.com/`

### Draft vs Published

- `draft: true` - Only visible with `hugo server -D`
- `draft: false` - Published on the live site

## 🎯 Best Practices

1. **Use semantic HTML** - Pico CSS styles semantic elements beautifully
2. **Minimal custom CSS** - Only add when necessary
3. **Write descriptive commits** - Help your team understand changes
4. **Test locally first** - Always run `hugo server` before pushing
5. **Keep images optimized** - Use compressed images in `/static/images/`

## 📖 Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Pico CSS Documentation](https://picocss.com/docs)
- [Markdown Guide](https://www.markdownguide.org/)

## 🆘 Help

- Hugo not found? [Install Hugo](https://gohugo.io/installation/)
- Deployment issues? Check [GitHub Actions](../../actions) tab
- Styling questions? See [Pico CSS docs](https://picocss.com/docs)

---

Built with ❤️ using Hugo + Pico CSS
