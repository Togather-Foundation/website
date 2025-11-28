# Togather Foundation - Information Architecture (Lean Version)

## Site Structure

**8 total pages** - streamlined for easy maintenance

```
Home
├── About (includes mission + problem)
│   └── Code of Conduct
├── Technical (includes ecosystem + features + system map)
├── Contribute (includes how-to + opportunities)
│   └── Contact
├── Resources (includes docs + reference)
└── Announcements
```

## Content Organization

### 1. **Home** (`/`)
- Landing page with clear value proposition
- Brief introduction to Togather Foundation
- Links to key sections
- Recent updates/announcements

### 2. **About** (`/about/`)
Single comprehensive page covering:
- Organization overview
- **Our Mission** - Purpose, objectives, values, vision
- **The Problem** - Background, challenges, impact, solution
- **Community Guidelines** - Link to Code of Conduct

Separate page:
- **Code of Conduct** (`/about/code-of-conduct/`) - Full community guidelines

### 3. **Technical** (`/technical/`)
Single comprehensive page covering:
- **Architecture** - Overall technical architecture
- **Components** - Key system components
- **Integration** - How components work together
- **Technology Stack** - Technologies used
- **System Map** - Architecture diagram and relationships
- **Features** - Current and prospective features

### 4. **Contribute** (`/contribute/`)
Single comprehensive page covering:
- **Getting Started** - Prerequisites and setup
- **Types of Contributions** - Code, docs, community support
- **Contribution Workflow** - Step-by-step process
- **Guidelines** - Contribution best practices
- **Current Opportunities** - Technical, documentation, community
- **Recognition** - How contributors are recognized
- **Getting Help** - Support for contributors

Separate page:
- **Contact** (`/contribute/contact/`) - Email, channels, social media

### 5. **Resources** (`/resources/`)
Single comprehensive page covering:
- **Documentation** - Getting started, guides, API docs
- **Reference Material** - Technical refs, papers, projects, standards
- **Glossary** - Key terms defined
- **External Resources** - Useful links

### 6. **Announcements** (`/posts/`)
- Blog/news listing page
- Individual announcement posts created with `hugo new posts/post-name.md`

## Hugo Implementation

### Directory Structure
```
content/
├── _index.md                    # Home page
├── about/
│   ├── _index.md               # About (mission + problem)
│   └── code-of-conduct.md      # Code of Conduct
├── technical/
│   └── _index.md               # Technical (ecosystem + features + map)
├── contribute/
│   ├── _index.md               # Contribute (how-to + opportunities)
│   └── contact.md              # Contact
├── resources/
│   └── _index.md               # Resources (docs + reference)
└── posts/                       # Announcements
    └── _index.md
```

## Navigation Menu
- About
- Technical
- Contribute
- Resources
- Announcements

## Benefits of Lean Structure

1. **Easier to maintain** - Fewer files to manage
2. **Better for users** - All related info in one place
3. **Faster to populate** - Less navigation between files
4. **Simpler** - Clear organization without excessive hierarchy
5. **Scalable** - Can still add subsections when needed

## Adding Content

### Add a new announcement:
```bash
hugo new posts/my-announcement.md
```

### Add a new feature page:
```bash
hugo new technical/features/feature-name.md
```

### Add new documentation:
```bash
hugo new resources/docs/doc-name.md
```

## Notes
- Each main section has a single comprehensive `_index.md`
- Code of Conduct and Contact are separate for easy discovery
- Use headings (##, ###) to organize content within pages
- All internal links use Hugo's `relref` shortcode for proper URLs
