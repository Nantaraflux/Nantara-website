# Nantara editorial redesign · 20 September 2026

The public marketing site now focuses on AI order operations for B2B distributors, wholesalers, importers and trading companies. The primary journey is a customer PO becoming a checked sales order, with explicit review and approval boundaries.

## Public routes

- `index.html`: primary landing page.
- `Nantara AI Landing Page v5.html`: the same complete landing page, with noindex and the root canonical. This remains a real page to avoid the stale legacy-route problem.
- `About.html`: company positioning and operating principles.
- `Web Builder.html`: secondary web design service and original interface concepts.
- `Privacy Policy.html`, `Terms of Service.html`: existing policy content and translations in the shared design shell. The policy language itself has not been revised in this design task.

Shared files are `nantara.css` and `nantara.js`. These routes do not load the former starfield, floating demo bar, chatbot code or old theme/translation scripts. Other versioned HTML files are historical snapshots, not primary navigation destinations.

## Design and behavior

- Warm ivory and ink green, generous spacing, locally hosted DM Sans.
- Original generated Nusantara landscape. Source, prompt and font license are in `assets/README.md`.
- EN/ID and light/dark preferences persist using the existing localStorage keys, including across the updated routes.
- Language selection uses a sliding indicator. Theme transition expands from the toggle where View Transitions are supported, with a color-transition fallback and reduced-motion support.
- Four-step order walkthrough is an explicitly labeled interactive illustration, not a connected AI service. Supports pointer and arrow/Home/End keyboard navigation.
- Consultation actions link to the owner's supplied WhatsApp business link.
- No customer logos, unsupported performance statistics or invented deployments are included in the new marketing content.

## Verification

Checked all six updated routes at 320, 390, 768, 1024 and 1440 pixels in EN and ID for horizontal overflow, header overlap, missing images and JavaScript errors. Checked theme/language persistence, all four workflow panels, keyboard tab navigation, FAQ expansion and mobile-menu close behavior. Reviewed desktop/mobile screenshots in both themes. Verified 86 internal links and exact main/v5 HTML parity except for the intended noindex metadata.

The social preview image and sitemap dates were updated. Deployment is GitHub Pages from `main` at the repository root.
