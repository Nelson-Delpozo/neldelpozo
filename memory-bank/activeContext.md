# Active Context: Personal Portfolio Website

## 1. Current Work Focus
- Phase 3 (Project Section) is fully completed, including troubleshooting and integrating the project screenshot with a web-friendly filename.
- Awaiting user feedback or instruction to proceed with Phase 4 (Contact Form & Sendgrid).

## 2. Recent Changes & Decisions
- **Phase 1 Completed:** Cleanup and basic structure.
- **Phase 2 Completed:** Hero section implemented.
- **Phase 3 Completed (Final version with image):**
    - Screenshot filename corrected from `"Screenshot 2025-06-17 at 9.33.48 PM.png"` to `"smartlynx-preview.png"` in `public/img/` to resolve loading issues.
    - `app/components/ProjectCard.tsx` created and finalized:
        - "View Project" link opens in a new tab.
    - `app/routes/_index.tsx` updated:
        - Renders the `ProjectCard` for "SmartLynx".
        - `imageUrl` prop updated to `/img/smartlynx-preview.png`.
- **Project Goal:** Create a "digital business card" style website, single-page, with a dark, minimalist theme.
- **Design Theme:** Dark, minimalist.

## 3. Next Steps
1.  **User Verification:** User to run `npm run dev` (if not already running) or refresh the browser to check the Project section, ensuring the SmartLynx screenshot now loads correctly.
2.  **Proceed to Phase 4 (Contact Form & Sendgrid):** Upon user confirmation/request.
3.  **Update `progress.md`** after user verification.

## 4. Active Decisions & Considerations
- Importance of web-friendly filenames (no spaces, special characters) for assets re-confirmed.

## 5. Open Questions for User
- Confirmation that Phase 3 (Project Section with screenshot loading correctly) looks good.
