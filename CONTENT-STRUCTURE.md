# Togather Foundation - Simple 3-Page Structure

## Site Structure

**3 main pages** - ultra-simple for getting started

```
Home
├── Ecosystem
└── News
    ├── Welcome post (example)
    └── Getting Started post (example)
```

## Pages

### 1. **Home** (`/`)
Landing page with introduction and links to other pages.

### 2. **Ecosystem** (`/ecosystem`)
Overview of the Togather Foundation ecosystem and technology.

### 3. **News** (`/news/`)
List of news items with 2 example posts included.

## Hugo Implementation

### Directory Structure
```
content/
├── _index.md                # Home page
├── ecosystem.md             # Ecosystem overview
└── news/
    ├── _index.md            # News list
    ├── welcome.md           # Example post 1
    └── getting-started.md   # Example post 2
```

## Navigation Menu
- Ecosystem
- News

## Adding Content

### Add a new news item:
```bash
hugo new news/my-announcement.md
```

Edit the file and set `draft: false` when ready to publish.

## Running Locally

```bash
hugo server -D
```

Visit: `http://localhost:1313/website/`

## Building

```bash
hugo --gc --minify
```

Output in `/public/` directory.
