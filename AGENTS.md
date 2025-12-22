# Togather Foundation Website - Copilot Instructions

## Project Overview

This is a **Hugo static site** (v0.123.0+) for the Togather Foundation—an open ecosystem for community-owned event discovery. The site is deliberately minimal: 3 pages (Home, Ecosystem, News), no backend, deployed via GitHub Actions to GitHub Pages.

**Key URLs:**
- Local dev: `http://localhost:1313/website/`
- Deployed: `https://togather-foundation.github.io/website/`
- Base URL in config: `https://togather-foundation.github.io/website/`

## Architecture & Data Flow

### Directory Structure
```
content/              # Markdown source - rendered by Hugo
├── _index.md        # Homepage (renders as /)
├── ecosystem.md     # Ecosystem overview page
└── news/            # News section
    ├── _index.md    # News list page
    ├── welcome.md
    └── getting-started.md

themes/minimal/       # Custom Hugo theme (not a marketplace theme)
├── layouts/          # 3 HTML templates + 3 partials
│   ├── _default/baseof.html   # Base template (all pages)
│   ├── _default/single.html   # Single pages/posts
│   ├── _default/list.html     # List pages (announcements)
│   └── partials/
│       ├── head.html          # Meta tags, Pico CSS CDN, custom CSS
│       ├── header.html        # Navigation menu
│       └── footer.html        # Copyright footer
└── assets/css/main.css        # Minimal overrides (12 lines)
```

### Rendering Pipeline
1. **Content** (`content/*.md` + `news/*.md`) contains frontmatter + markdown
2. **Templates** (`themes/minimal/layouts/`) render markdown to HTML
3. **Styling**: Pico CSS (Amber theme) via CDN + 12 lines of custom CSS
4. **Output**: Static files in `/public/` (gitignored, generated at build time)

**Why this structure?** Ultra-simplicity for fast iteration on branding/messaging without backend complexity.

## Critical Workflows

### Content Creation
```bash
# Add new news item
hugo new news/my-title.md

# Edit front matter in the file - **must set `draft: false` to publish**
# Format: title, date (YYYY-MM-DD), draft, description
# Separator <!--more--> hides content after it in summaries
```

### Local Development
```bash
# Start dev server (watches for changes, rebuilds live)
hugo server -D   # -D = include drafts
# Open http://localhost:1313/website/ in browser
```

### Building & Deployment
```bash
# Local build (output to /public/)
hugo --gc --minify

# Auto-deployment: push to main branch → GitHub Actions → GitHub Pages (~1 min)
# No manual deploy needed
```

**Important:** The `baseURL` in `hugo.toml` must match the deployed GitHub Pages URL. Relative links are already correct in templates using `relref` shortcodes.

## Project Conventions

### Front Matter Pattern
All content uses this structure (from YAML frontmatter):
```yaml
---
title: "Page Title"
description: "Meta description (shown in browser tab, SEO)"
date: YYYY-MM-DD          # Only for posts
draft: false              # false = published, true = hidden (except with -D flag)
---
```

### Navigation Logic
- **Auto-generated from file paths**, not manual config
- Homepage → `content/_index.md`
- Ecosystem page → `content/ecosystem.md` (appears as `relref "/ecosystem"`)
- News listing → `content/news/_index.md` (appears as `relref "/news"`)
- Menu items defined in `hugo.toml` (currently none, bare site)

### Linking Between Pages
Always use Hugo's `relref` shortcode (not HTML links):
```markdown
[Link text]({{< relref "/ecosystem" >}})  # Correct
[Link text](/ecosystem)                   # Avoid - breaks with baseURL structure
```

### CSS & Styling
- **Pico CSS** (Amber theme) from CDN provides all core styling
- **Custom CSS** in `themes/minimal/assets/css/main.css` is minimal (article spacing, .text-muted utility)
- No JavaScript—pure HTML/CSS for simplicity
- Pico handles responsiveness automatically

## Key File Purposes

| File | Purpose |
|------|---------|
| `hugo.toml` | Site config (baseURL, theme, title, language) |
| `content/_index.md` | Homepage content |
| `content/ecosystem.md` | Ecosystem overview page |
| `content/news/_index.md` | News list (shows summaries of all news items) |
| `themes/minimal/layouts/_default/baseof.html` | Master template (header + content block + footer) |
| `themes/minimal/layouts/_default/single.html` | Single page/post template |
| `themes/minimal/layouts/_default/list.html` | List page template (announcements) |
| `themes/minimal/assets/css/main.css` | Custom styling overrides |

## Common Tasks for Agents

### To Edit Page Content
1. Edit the corresponding `.md` file in `content/` (e.g., `content/_index.md` for homepage)
2. Use markdown formatting and `relref` shortcodes for links
3. Reload dev server or browser to see changes (Hugo watches automatically)

### To Add a New News Item
1. Run `hugo new news/my-title.md`
2. Edit the frontmatter: add proper title, date, description
3. Write content in markdown
4. Set `draft: false` when ready
5. Push to main → auto-deploys

### To Style New Elements
1. Edit `themes/minimal/assets/css/main.css` for custom CSS
2. Pico CSS classes are available globally (e.g., `<article>`, `<button>`, `<form>`)
3. Minified CSS is auto-fingerprinted by Hugo (cache busting)

### To Update Navigation
1. Menu is auto-generated from content structure
2. Add/remove pages by creating/deleting `.md` files in `content/`
3. No menu config file to edit

## External Dependencies
- **Hugo** (v0.123.0+): Static site generator
- **Pico CSS (Amber)**: Classless CSS framework via CDN
- **GitHub Actions**: Auto-deployment on push to main
- **GitHub Pages**: Hosting (no separate server)

## Debugging Tips
- **Dev server not updating?** Hugo watches `content/` and `themes/` but not `hugo.toml` (restart if config changed)
- **Links broken on GitHub Pages?** Check `baseURL` in `hugo.toml` matches the repo URL
- **CSS not showing?** Minified CSS has cache-busting hash—clear browser cache or use dev tools
- **Drafts not appearing?** Missing `-D` flag on `hugo server` (drafts hidden by default)
