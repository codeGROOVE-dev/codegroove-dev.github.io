# codeGROOVE Website

A modern, professional SaaS website for codeGROOVE built with Eleventy (11ty).

## Features

- **Modern SaaS Design**: Professional yet funky design that maintains the codeGROOVE personality
- **Static Site Generation**: Built with Eleventy for fast performance and easy deployment
- **Responsive Design**: Fully responsive across all devices
- **Blog System**: Markdown-based blog with sample article
- **Security First**: Includes security.txt file with Signal contact
- **SEO Optimized**: Proper meta tags and structured content

## Pages

- **Homepage**: Compelling value proposition and call-to-action
- **About**: Company story and principles
- **Products**: Overview of upcoming developer tools
- **Blog**: Technical insights and updates
- **Open Source**: Commitment to open source community
- **Security**: Security practices and responsible disclosure
- **Contact**: Multiple ways to get in touch

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

This will start a local development server with hot reload at `http://localhost:8080`.

### Build for Production

```bash
npm run build
```

This will generate the static site in the `_site` directory.

### Clean Build

```bash
npm run clean
```

This removes the `_site` directory.

## Project Structure

```
src/
├── _includes/          # Reusable includes
├── _layouts/           # Page layouts
│   ├── base.njk       # Base layout with navigation
│   └── post.njk       # Blog post layout
├── _data/             # Site data
├── blog/              # Blog posts (Markdown)
├── css/               # Stylesheets
│   └── main.css       # Main stylesheet
├── js/                # JavaScript
│   └── main.js        # Main JavaScript file
├── media/             # Images and fonts
├── .well-known/       # Well-known files
│   └── security.txt   # Security contact information
└── *.njk              # Page templates
```

## Deployment

The site can be deployed to any static hosting service:

- **GitHub Pages**: Push the `_site` directory
- **Netlify**: Connect your repository and set build command to `npm run build`
- **Vercel**: Similar to Netlify
- **Custom**: Upload the `_site` directory to your server

## Customization

### Colors

Edit the CSS variables in `src/css/main.css`:

```css
:root {
    --color-primary: #ffff00;    /* codeGROOVE yellow */
    --color-secondary: #000000;   /* Black */
    /* ... */
}
```

### Typography

The site uses the Ojuju font family for headings and system fonts for body text.

### Content

All content is in the `src/` directory. Pages use Nunjucks templating with Markdown support for blog posts.

## License

Copyright 2024 codeGROOVE. All rights reserved.