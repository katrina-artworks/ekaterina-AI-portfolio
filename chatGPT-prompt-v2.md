# AI Portfolio Super Prompt v2

## AI Context — Portfolio Website Project

You are helping build a **high-quality personal portfolio website** for a student in an **Interactive Design and Animation program**.

Your job is to generate **complete, clean, copy-paste ready code** that produces a **modern, visually impressive portfolio website** similar in quality to portfolios seen on:

* Awwwards
* Dribbble
* Behance featured portfolios

However, the implementation must remain **technically simple**.

---

# Developer Skill Level

The user is **NOT an experienced programmer**.

Therefore you must:

* Generate **FULL FILE CONTENTS**
* Never output partial snippets
* Never assume the user knows where to insert code
* Always produce **copy-paste ready files**

Only explain code **when explicitly asked**.

---

# Technology Rules (STRICT)

You MUST only use:

* HTML
* CSS
* Vanilla JavaScript

Do NOT use:

* React
* Vue
* Angular
* npm
* build tools
* TypeScript
* external JS libraries

The site must work by simply opening:

```
index.html
```

in a browser.

No server required.

---

# File Structure (MANDATORY)

The project must follow this EXACT structure:

```
/
index.html

/css
styles.css

/js
main.js

/assets
/images
```

Use placeholder images from:

```
https://placehold.co
```

Example:

```
https://placehold.co/600x400
```

---

# Website Sections (Order Matters)

The website must contain these sections in this order:

1. Hero
2. About
3. Work / Projects
4. Skills
5. Contact
6. Footer

Each section must use **semantic HTML**.

Use:

```
<header>
<main>
<section>
<footer>
```

---

# Placeholder Content

**Name:**
Alex Rivera

**Tagline:**
Designer. Animator. Creative Thinker.

**Bio:**
I'm a multidisciplinary designer who loves bringing ideas to life through motion, interaction, and visual storytelling. Currently finishing my diploma in Interactive Design and Animation.

**Projects**

* Brand Identity — Cafe Luna
* Motion Reel 2025
* UI Concept — Fitness App
* 3D Character Design
* Event Poster Series
* Interactive Infographic

**Skills**

* Figma
* After Effects
* Photoshop
* Illustrator
* Blender
* HTML/CSS
* Premiere Pro

**Social Links**

* Behance
* LinkedIn
* Instagram

All links should use `#` placeholders.

---

# Design Style

The design aesthetic must be:

* Modern
* Minimal
* Professional
* Creative
* Dark Mode

Inspired by modern portfolio sites.

Design must feel **premium and polished**.

---

# Design Tokens

Use CSS variables.

## Colors

```
--bg-color: #0f172a
--card-color: #111827
--accent-color: #6366f1
--accent-hover: #818cf8
--text-primary: #f9fafb
--text-secondary: #9ca3af
```

## Typography

Headings:
Space Grotesk

Body:
Inter

Import fonts from Google Fonts.

---

# Layout Guidelines

## Hero Section

* Full screen height
* Centered content
* Large typography
* Call-to-action button

## About Section

* Profile image + text layout
* Responsive grid

## Projects Section

* Responsive card grid
* Hover image effects

## Skills Section

* Tag-style layout
* Hover animations

## Contact Section

* Social links with hover effects

## Footer

* Minimal copyright text

---

# Responsiveness

The layout must work on:

* Mobile
* Tablet
* Desktop

Use:

* CSS Grid
* Flexbox
* clamp()
* fluid spacing

Avoid fixed widths.

---

# Animation Rules

Animations must be **smooth, subtle, and modern**.

Include:

* Scroll-triggered fade-ins
* Hover effects on cards
* Button hover animations
* Image zoom on hover
* Smooth scrolling navigation

Use:

```
Intersection Observer API
```

for scroll animations.

Keep JavaScript minimal.

---

# Premium Interaction Effects

To achieve a modern portfolio feel, include:

* Cursor glow effect
* Glassmorphism navbar
* Hover overlay on project cards
* Image zoom hover effects
* Subtle card elevation on hover
* Animated mobile navigation menu

These effects must remain **lightweight and performant**.

---

# Performance Rules

The website must:

* Load instantly
* Avoid heavy animations
* Avoid large dependencies
* Use efficient CSS animations
* Minimize JavaScript usage

Animations must be **GPU-friendly**.

---

# Accessibility

Follow basic accessibility rules:

* Use semantic HTML
* Include alt text for images
* Maintain readable contrast
* Ensure clickable elements are large enough

---

# Code Quality Standards

Code must be:

* Clean
* Readable
* Properly indented
* Logically organized

CSS must use:

* Variables
* Reusable classes
* Modern layout techniques

---

# Development Workflow Rules

When creating the project initially:

Generate **ALL required files**.

When updating code later:

* Only output the files that changed
* Always output **FULL FILE CONTENTS**

Never rename files or change the folder structure unless explicitly asked.

---

# Deployment Target

The site must be compatible with:

**GitHub Pages**

No server-side code allowed.

---

# Goal

The final website should:

* Look visually impressive
* Feel modern and interactive
* Load instantly
* Be easy to customize
* Work without build tools
* Be deployable to GitHub Pages

The result should feel like a **professional design-student portfolio ready for job applications**.