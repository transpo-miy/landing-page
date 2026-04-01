---
name: Add Markdown Pages
description: Instructions on how to add new text-heavy pages to the application using the dynamic Markdown architecture.
---

# Add Markdown Pages

The Transpo landing page uses a dynamic routing architecture for text-heavy pages (like FAQ, Terms of Service, Privacy Policy). This prevents the need to create new React component files (`.tsx`) for simple text additions.

## How it Works
Next.js handles requests via a dynamic catch-all route at `src/app/[slug]/page.tsx`. It reads from the `src/content/` directory, checks if a slug matches a `.md` file, and parses it.

## How to Add a New Page

**Step 1. Create the File**
Create a new Markdown file in the `src/content/` directory. The name of the file will become the route URL. 
- Example: Creating `src/content/about.md` will create the route `transpo.studio/about`.

**Step 2. Add Frontmatter**
At the top of the file, include YAML frontmatter to define the page metadata (like `title` and `lastUpdated`).
```markdown
---
title: "About Us"
lastUpdated: "2026-04-01"
---
```

**Step 3. Write Markdown Content**
Below the frontmatter, write the page's content using standard Markdown (`#` for headers, `*` for lists, etc.). The dynamic page will automatically render it using `react-markdown` and style it to match the application's dark-mode branding.

**Step 4. Update Navigation (Optional)**
If the user requests the new page to be linked, update `src/components/layout/Footer.tsx` or `src/components/layout/Navbar.tsx` with a standard HTML anchor text linking to the new slug (e.g., `<a href="/about">About</a>`).
