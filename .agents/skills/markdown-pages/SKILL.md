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

---

## 🎨 Design & Navigation Preferences
When editing or expanding the Transpo Landing Page, you **must adhere** to the following established rules as defined by the user:

1. **Splash Screen Rule**: The splash animation triggers **only** on the very first visit of a session (using `sessionStorage` in `page.tsx`). Do **not** trigger it manually on navigation clicks. Navigating back from a subpage should perfectly bypass the animation without glitches.
2. **Logo Routing**: The Transpo Navbar Logo acts strictly as a scroll-to-top feature on the home page, and a link to `/#hero` on subpages. Never use an `href="/"` tag that forces a hard reload, use `router.push('/#hero')`.
3. **Visual Aesthetics**: All new pages must retain the home page's ambient styling. Markdown pages are automatically wrapped in a dark-mode, glassmorphic container spanning `#4A2B14/95` to `#3B2210/95` with the `<AnimatedBackground />` layered safely behind it. Do not attempt to use solid color backgrounds (like `bg-background`) on `<main>` tags that will obscure the ambient animated particles. 
4. **Media Placement**: When placing video Demo UI loops, they belong exclusively in the **Products** section. The Hero demo simulates the extension interaction manually and statically.
