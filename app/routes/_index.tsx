import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";

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
      {/* Placeholder for Projects Section */}
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-50">
            Projects
          </h2>
          <p className="mt-4 text-gray-400 md:text-xl">
            Coming soon...
          </p>
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
