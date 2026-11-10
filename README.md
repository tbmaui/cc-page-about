# Complete Controller — About Us — Founder Story

The About Us — Founder Story page and its WordPress integration, reviewed November 10, 2026. Theme baseline: **cc-modern 1.3.13**.

## Contents

- `wordpress/patterns/page-about-story.php`: the editable Gutenberg whole-page starter.
- `wordpress/patterns/contact-form.php`: the shared consultation section.
- `wordpress/assets/`: page photography/illustration, self-hosted fonts, and the theme's shared stylesheet and progressive enhancements.
- `wordpress/inc/` and `wordpress/theme.json`: reviewed shared dependencies and design tokens.
- `source/`: the supplied design reference. The WordPress pattern is the maintained implementation; preserve matching industry copy in the HTML source when editing it.
- `tools/`: native page preview and block validation helpers.
- `page.json`: provenance and integration metadata.

## Preview and validate

With PHP 8+ and Node.js installed, run from the repository root:

```sh
node tools/validate-blocks.js
php tools/build-preview.php
```

Open `build/preview.html` in a browser. This previews the page content and local assets; the installed theme supplies the shared site header, footer, navigation and optional live CAS-i widget. Generated previews are ignored by Git.

The original React/TanStack export is preserved under `source/reference-app/`, including its own AGENTS.md. Its `/__l5e/assets-v1/` references rely on the originating Lovable environment; the native WordPress preview uses the actual bundled images and does not require that resolver or an npm install. The export retains its original scheduling/social placeholders; the WordPress implementation uses the existing consultation form.

## Apply to WordPress

This repository contains **page additions for an existing cc-modern theme**, not a complete installable theme. Use the updated 1.3.13 theme package from the parent workspace as the installation baseline. The [shared theme repository](https://github.com/tbmaui/complete-controller-modern-theme) is maintained separately; these page repositories do not automatically update it.

1. Back up the installed theme and target page. Compare shared files against your installed version before replacing them; shared CSS, JavaScript and PHP are snapshots and may include newer changes on your site.
2. Copy `wordpress/patterns/page-about-story.php` and the page-specific assets into the matching paths in `wp-content/themes/cc-modern/`. Merge shared dependencies only if missing or outdated. The 1.3.13 theme already loads `inc/industry-page.php` and offers the shared consultation form.
3. Create a review draft using the **Full Width** template. Insert **Page — About Us: Founder Story** from **CC — Whole Page Starters**.
4. Review forms, links, mobile layout and any site-specific copy before applying the reviewed content at the existing URL. Updating a theme pattern does not update content already saved in a WordPress page. The starter importer also skips existing URLs.
5. Keep the shared theme's header/footer. Configure the actual consultation destination in the theme; do not substitute the reference HTML's preview-only form.

The new About pattern is separate from the original `/us/` starter. The theme importer can create `/about/` if it is unused; publishing or changing the navigation/canonical URL is a separate site decision. The bundled founder photographs are compatible with the 1.3.13 CC Image Library.

## Feedback incorporated

Converted the approved founder story to native Gutenberg blocks and the established serif heading style. Reduced the mobile image-to-copy gap to 24px and removed sticky positioning on phones. The original About design remains available in the shared theme.

All four WordPress pages share the CAS-i touch-screen landscape dock fix in the included shared assets.

## Verification

The source theme passed PHP syntax checks, actual WordPress 6.6.3 editor validation and responsive checks at 390, 768, 1024, 1440 and 1920px. The four-page review contained 776 valid blocks, no horizontal overflow or broken images, 166 passing contrast pairs and no utility regressions. CAS-i dock checks used a noninteractive iframe; no real call or booking was started.

## Earlier prototype

[Original prototype repository](https://github.com/tbmaui/founder-s-story) is preserved separately and was not modified.
