# System Patterns: Personal Portfolio Website

## 1. Overall Architecture
The portfolio website will be built using the Remix framework, leveraging its server-side rendering (SSR) capabilities for performance and SEO. Given the project's nature, it will likely be a single-page application (SPA) feel with distinct sections, or a small multi-page application where each main section (Home, Projects, Contact) could be a separate route.

- **Frontend:** React (via Remix), Tailwind CSS (as per existing project setup).
- **Backend:** Remix server-side functions (loaders and actions) for any data handling (e.g., contact form submission).
- **Styling:** Tailwind CSS will be the primary styling utility. Custom CSS can be added if necessary for more complex or unique design elements.

## 2. Key Technical Decisions (Initial)
- **Remix for Full-Stack:** Utilize Remix's features for routing, data loading, and form submissions.
- **Tailwind CSS for Styling:** Adhere to Tailwind's utility-first approach for a consistent and maintainable design.
- **Sendgrid for Email:** Integrate Sendgrid for the contact form functionality. This will require secure handling of API keys, likely via environment variables.
- **Static Assets:** Images (like `Nelson-Delpozo.jpeg`) and other static assets will be served from the `public/` directory.

## 3. Design Patterns
- **Component-Based UI:** Structure the UI using reusable React components (e.g., Navbar, ProjectCard, ContactForm, Footer).
- **Route-based Code Splitting:** Remix handles this automatically, ensuring only necessary code is loaded for each view.
- **Progressive Enhancement:** Forms and other interactive elements should ideally work even if JavaScript fails (Remix helps with this).
- **Responsive Design:** Employ mobile-first design principles using Tailwind CSS's responsive variants.

## 4. Component Relationships (High-Level)
```mermaid
graph TD
    App[Root Layout (root.tsx)] --> Header[Header/Navbar]
    App --> PageContent[Page Specific Content]
    App --> Footer[Footer]

    PageContent --> HomePage[HomePage (_index.tsx)]
    PageContent --> ProjectsPage[Projects Section/Page]
    PageContent --> ContactPage[Contact Section/Page]
    PageContent --> AboutPage[About Section/Page (Optional)]

    HomePage --> HeroSection
    HomePage --> AboutTeaser
    HomePage --> ProjectsTeaser
    HomePage --> ContactTeaser

    ProjectsPage --> ProjectCard1[Project Card 1]
    ProjectsPage --> ProjectCard2[Project Card 2]
    ProjectsPage --> ProjectCard3[Project Card 3 (Optional)]

    ContactPage --> ContactForm[Contact Form]
    ContactForm -- submits to --> SendgridAction[Remix Action for Sendgrid]

    subgraph SharedComponents
        Header
        Footer
        ProjectCard[Project Card Component]
    end
```

## 5. Data Flow
- **Project Data:** Initially, project details (titles, descriptions, links, image paths) might be hardcoded within the Project components or a local data structure. For a small number of projects, this is acceptable.
- **Contact Form:**
    1. User fills out the form on the client-side.
    2. On submission, Remix's `action` function on the server-side receives the form data.
    3. The action function validates the data.
    4. The action function makes an API call to Sendgrid to send the email.
    5. The action function returns a success or error message to the client.

## 6. Error Handling
- **Form Validation:** Client-side and server-side validation for the contact form.
- **API Errors:** Graceful handling of potential errors from the Sendgrid API.
- **UI Feedback:** Clear messages to the user for form submission status, errors, etc.
