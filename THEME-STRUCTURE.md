# Theme Structure

Simple, standard Hugo theme with minimal files.

## Layouts (3 files)

### `_default/baseof.html`
Base template that wraps all pages. Includes:
- Head
- Header (navigation)
- Main content block
- Footer

### `_default/single.html`
Template for single pages and posts (e.g., ecosystem page, individual announcements).
Shows:
- Title
- Date (if exists)
- Content

### `_default/list.html`
Template for list pages (e.g., announcements listing).
Shows:
- Title
- Content
- List of child pages with titles, dates, and summaries

## Partials (3 files)

### `partials/head.html`
HTML head section:
- Meta tags (charset, viewport, description)
- Title
- Pico CSS CDN link
- Custom CSS (minified and fingerprinted)

### `partials/header.html`
Site header with navigation:
- Site title (links to home)
- Menu items from config

### `partials/footer.html`
Simple footer with copyright notice.

## CSS

Single file: `assets/css/main.css`
- Minimal overrides for Pico CSS
- Article spacing
- Text muted utility class

## How Pages Work

- **Homepage**: Uses `_index.md` → rendered with baseof + single template
- **Ecosystem**: Uses `ecosystem.md` → rendered with baseof + single template
- **News listing**: Uses `news/_index.md` → rendered with baseof + list template
- **Individual news item**: Uses `news/*.md` → rendered with baseof + single template

All templates use Pico CSS for styling with minimal custom CSS.
