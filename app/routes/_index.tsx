import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import sgMail from "@sendgrid/mail";

import Hero from "~/components/Hero";
import ProjectCard from "~/components/ProjectCard";
import ContactForm from "~/components/ContactForm";
// We don't need ContactActionData imported here as it's used by ContactForm which uses useActionData

export const meta: MetaFunction = () => {
  return [
    { title: "Nelson Delpozo - Software Developer" },
    { name: "description", content: "Personal portfolio of Nelson Delpozo, software and web developer." },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const fieldErrors = {
    name: name ? undefined : "Name is required",
    email: email ? (email.includes("@") ? undefined : "Invalid email format") : "Email is required",
    message: message ? undefined : "Message is required",
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return json({ fieldErrors, message: null, error: "Please fill out all required fields correctly." }, { status: 400 });
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  const msg = {
    to: process.env.SENDGRID_TO_EMAIL as string,
    from: process.env.SENDGRID_FROM_EMAIL as string, // Use the email address or domain you verified
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>`,
  };

  try {
    await sgMail.send(msg);
    return json({ message: "Message sent successfully!", error: null, fieldErrors: null });
  } catch (error: unknown) {
    console.error("Sendgrid error:", error);
    // It's good practice to check the error structure if possible, e.g. (error as any).response?.body
    return json({ error: "Failed to send message. Please try again later.", message: null, fieldErrors: null }, { status: 500 });
  }
}

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

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-50">
            Contact Me
          </h2>
          <ContactForm />
        </div>
      </section>

      <footer className="w-full py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Nelson Delpozo
      </footer>
    </div>
  );
}
