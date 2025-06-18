import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Nelson Delpozo - Software Developer" },
    { name: "description", content: "Personal portfolio of Nelson Delpozo, software and web developer." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center p-4">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Nelson Delpozo</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Software & Web Developer
        </p>
      </header>

      <main className="mt-8 text-center">
        <p>Welcome to my digital business card.</p>
        <p>Site under construction.</p>
        
        <div className="mt-8 p-4 border border-dashed border-gray-400 dark:border-gray-600">
          <h2 className="text-2xl font-semibold">Phase 1 Complete</h2>
          <p>Basic cleanup and dark mode setup is done.</p>
          <p>The background of this page should be dark gray if dark mode is working.</p>
        </div>
      </main>

      <footer className="mt-12 text-sm text-gray-500 dark:text-gray-500">
        &copy; {new Date().getFullYear()} Nelson Delpozo
      </footer>
    </div>
  );
}
