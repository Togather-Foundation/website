# Minimal Theme

A clean, content-focused theme with minimal styling and no unnecessary visual clutter.  
Use this theme when you want a fast, readable site that is easy to customize with a small set of well-documented options.

## Features

- Simple, typography-first layout optimized for reading.
- Responsive design that works on desktops, tablets, and phones.
- Lightweight CSS with no heavy JavaScript dependencies.
- Easy to customize colors, fonts, and spacing.
- Optional site logo and tagline support.
- Basic navigation menu for top-level pages.

## Installation

1. **Copy the theme into your project**
   - Place this directory under your project's `themes/` folder, for example:
     - `themes/minimal/`

2. **Enable the theme**
   - In your site's configuration file (for example, `config.yml`, `config.toml`, or equivalent), set the theme name to `minimal`.  
     Example:

     ```yaml
     theme: minimal
     ```

3. **Build or run your site**
   - Rebuild your site or restart your development server so the new theme is applied.

## Configuration

The Minimal Theme can be customized through your site's main configuration file or per-page settings, depending on your static site generator. Common options include:

- **Site title and tagline**
  - Configure the title and optional tagline in your global config:
    ```yaml
    title: "My Minimal Site"
    tagline: "A clean and simple theme"
    ```

- **Navigation menu**
  - Define the links that appear in the main navigation bar:
    ```yaml
    menu:
      main:
        - name: "Home"
          url: "/"
        - name: "Blog"
          url: "/blog/"
        - name: "About"
          url: "/about/"
    ```

- **Branding (logo and favicon)**
  - Place your logo and favicon files in your site's static assets directory (for example, `static/` or `public/`) and reference them via your config or template settings, if supported:
    ```yaml
    params:
      logo: "/images/logo.png"
      favicon: "/favicon.ico"
    ```

- **Colors and typography**
  - Override the default styles by adding a custom CSS file and including it via configuration:
    ```yaml
    params:
      customCSS:
        - "/css/custom.css"
    ```
  - In `custom.css`, you can adjust fonts, colors, and spacing to match your branding.

- **Footer content**
  - Configure footer text or links globally:
    ```yaml
    params:
      footerText: "© 2025 My Minimal Site"
    ```

Refer to your static site generator's documentation for the exact names and locations of configuration files, and adapt the examples above as needed for your environment.
