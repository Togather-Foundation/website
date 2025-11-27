# Togather Foundation - Information Architecture

## Proposed Site Structure

### Primary Navigation

```
Home
├── About
│   ├── Our Mission
│   ├── The Problem
│   └── Code of Conduct
├── Technical
│   ├── Ecosystem Overview
│   ├── Features
│   └── System Map
├── Contribute
│   ├── How to Contribute
│   ├── Opportunities
│   └── Contact
└── Resources
    ├── Documentation
    └── Reference Material
```

## Content Organization

### 1. **Home** (`/`)
- Landing page with clear value proposition
- Brief introduction to Togather Foundation
- Links to key sections
- Recent updates/announcements

### 2. **About** (`/about/`)
Main about page with overview, plus subsections:
- **Our Mission** (`/about/mission/`) - Shared purpose, objectives
- **The Problem** (`/about/problem/`) - Problem statement and context
- **Code of Conduct** (`/about/code-of-conduct/`) - Community guidelines

### 3. **Technical** (`/technical/`)
Technical documentation hub:
- **Ecosystem Overview** (`/technical/ecosystem/`) - High-level technical overview
- **Features** (`/technical/features/`) - Individual feature pages
- **System Map** (`/technical/system-map/`) - Architecture and system relationships

### 4. **Contribute** (`/contribute/`)
Activation and engagement:
- **How to Contribute** (`/contribute/how-to/`) - Contribution guide
- **Opportunities** (`/contribute/opportunities/`) - Specific ways to help
- **Contact** (`/contribute/contact/`) - Contact information

### 5. **Resources** (`/resources/`)
Reference materials and documentation:
- **Documentation** (`/resources/docs/`) - Technical docs
- **Reference Material** (`/resources/reference/`) - Additional resources

## Hugo Implementation

### Directory Structure
```
content/
├── _index.md                    # Home page
├── about/
│   ├── _index.md               # About overview
│   ├── mission.md              # Our Mission
│   ├── problem.md              # The Problem
│   └── code-of-conduct.md      # Code of Conduct
├── technical/
│   ├── _index.md               # Technical hub
│   ├── ecosystem.md            # Ecosystem Overview
│   ├── features/
│   │   ├── _index.md          # Features listing
│   │   └── feature-*.md       # Individual features
│   └── system-map.md           # System Map
├── contribute/
│   ├── _index.md               # Contribute hub
│   ├── how-to.md               # How to Contribute
│   ├── opportunities.md        # Opportunities
│   └── contact.md              # Contact
├── resources/
│   ├── _index.md               # Resources hub
│   ├── docs/
│   │   ├── _index.md          # Docs listing
│   │   └── *.md               # Documentation pages
│   └── reference.md            # Reference Material
└── posts/                       # Announcements
    └── *.md
```

## Navigation Menu
- Home
- About
- Technical
- Contribute
- Resources
- Announcements (links to /posts/)

## Notes
- Each section has an `_index.md` that serves as the landing page
- Subsections can be single pages or list pages
- Use Hugo's built-in section menus for subsection navigation
- Keep top-level nav simple (5-6 items max)
