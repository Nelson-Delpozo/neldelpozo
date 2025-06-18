import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";
import ProjectCard from "~/components/ProjectCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Nelson Delpozo - Software Developer" },
    { name: "description", content: "Personal portfolio of Nelson Delpozo, software and web developer." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <Hero />
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-50">
            Projects
          </h2>
          <div className="max-w-md mx-auto"> {/* Adjust max-width as needed for single card */}
            <ProjectCard
              title="SmartLynx"
              description="SmartLynx is a file-sharing app for freelancers and creative professionals, or anyone who needs to share files that are too big for email. It's like a simpler Dropbox. Files are shared through emailed download links, and the shared files are stored securely on AWS S3."
              liveUrl="https://smartlynx.app"
              imageUrl="/img/smartlynx-preview.png"
              imageAltText="SmartLynx application preview"
            />
          </div>
        </div>
      </section>

      {/* Placeholder for Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-50">
            Contact Me
          </h2>
          <p className="mt-4 text-gray-400 md:text-xl">
            Contact form coming soon...
          </p>
        </div>
      </section>

      <footer className="w-full py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Nelson Delpozo
      </footer>
    </div>
  );
}
