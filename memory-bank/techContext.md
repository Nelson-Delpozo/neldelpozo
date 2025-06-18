# Tech Context: Personal Portfolio Website

## 1. Core Technologies
- **Framework:** Remix (Indie Stack)
    - This implies React for the view layer.
    - Server-side logic (loaders, actions) will be in TypeScript/JavaScript.
- **Language:** TypeScript (likely, given the Indie Stack setup and `tsconfig.json`).
- **Styling:** Tailwind CSS.
- **Package Manager:** npm (inferred from `package-lock.json`).
- **Database (if used by Indie Stack features we leverage):** Prisma with SQLite (common for Indie Stack, but portfolio might not need DB interaction beyond what's there). For the portfolio itself, a database is likely not needed for core features like project display or contact form.
- **Email Service:** Sendgrid (for contact form).

## 2. Development Environment
- **Local Setup:** Node.js and npm required.
- **Editor:** VS Code (implied by user's environment).
- **Version Control:** Git (implied by `.gitignore`).
- **Dev Server:** `npm run dev` (standard Remix command).

## 3. Key Files & Directories (from initial project structure)
- `app/root.tsx`: Main application layout, global styles, meta tags.
- `app/routes/`: Directory for route modules.
    - `app/routes/_index.tsx`: Current homepage, will be modified/replaced for the portfolio's main page.
- `public/`: For static assets like images (`Nelson-Delpozo.jpeg`, `favicon.ico`).
- `app/tailwind.css`: Main CSS file where Tailwind directives are imported.
- `tailwind.config.ts`: Tailwind CSS configuration.
- `remix.config.js`: Remix framework configuration.
- `.env`: For environment variables (e.g., Sendgrid API Key). Will need to ensure this is set up correctly and `.env.example` is updated.

## 4. Technical Constraints & Considerations
- **Sendgrid API Key:** Must be stored securely as an environment variable and not committed to the repository.
- **Remix Conventions:** Adhere to Remix's routing, data loading (loaders), and data mutation (actions) patterns.
- **Tailwind CSS Best Practices:** Utilize utility classes effectively. Keep custom CSS minimal.
- **Performance:** Optimize images and leverage Remix's SSR for fast load times.
- **Accessibility (a11y):** Implement with accessibility in mind (semantic HTML, ARIA attributes where necessary).
- **Responsive Design:** Ensure the site looks and functions well on all device sizes.
- **Existing Indie Stack Code:** The current Indie Stack includes features like user authentication and notes. We need to decide:
    - Whether to remove/disable unused features to simplify the codebase.
    - How to structure the portfolio routes alongside or in place of existing routes. For a pure portfolio, most existing routes (`/join`, `/login`, `/notes`) might be unnecessary.

## 5. Dependencies to Potentially Add
- `@sendgrid/mail`: The official Sendgrid Node.js library for sending emails.
- Possibly icon libraries (e.g., `lucide-react`, `heroicons`) for UI elements if desired.

## 6. Build & Deployment (Future Considerations)
- **Build Command:** `npm run build` (standard Remix).
- **Deployment Platform:** Fly.io (inferred from `fly.toml` and `Dockerfile`), but this is a future step.
