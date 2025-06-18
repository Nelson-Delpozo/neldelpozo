# Active Context: Personal Portfolio Website

## 1. Current Work Focus
- Phase 1 (Cleanup & Basic Structure) has been completed.
- Awaiting user feedback or instruction to proceed with Phase 2 (Hero Section).

## 2. Recent Changes & Decisions
- **Phase 1 Completed:**
    - Unnecessary Indie Stack routes (`join`, `login`, `logout`, `notes`, etc.) removed.
    - Unused models (`User`, `Note`, `Password`) removed from `prisma/schema.prisma` and a migration was run.
    - `app/session.server.ts` removed.
    - `app/root.tsx` updated:
        - Removed `getUser` and related loader.
        - Added `dark` class to `<html>` tag for default dark mode.
    - `tailwind.config.ts` updated with `darkMode: "class"`.
    - Directories `app/components/` and `public/img/` created.
    - `public/Nelson-Delpozo.jpeg` moved to `public/img/Nelson-Delpozo.jpeg`.
    - Basic placeholder content added to `app/routes/_index.tsx` to verify Phase 1.
- **Project Goal:** Create a "digital business card" style website, single-page, with a dark, minimalist theme.
- **Design Theme:** Dark, minimalist.

## 3. Next Steps
1.  **User Verification:** User to run `npm run dev` and check the placeholder `_index.tsx` page.
2.  **Proceed to Phase 2 (Hero Section):** Upon user confirmation/request. This involves:
    *   Developing `app/components/Hero.tsx`.
    *   Integrating `Nelson-Delpozo.jpeg` and bio content.
    *   Styling for the dark, minimalist theme.
    *   Updating `app/routes/_index.tsx` to use the `Hero` component.
3.  **Update `progress.md`** after user verification.

## 4. Active Decisions & Considerations
- Continue with the phased development plan.
- Ensure all new components and styles adhere to the dark, minimalist aesthetic.

## 5. Open Questions for User
- Confirmation that Phase 1 changes are satisfactory after testing with `npm run dev`.
