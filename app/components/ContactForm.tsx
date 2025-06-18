import { Form, useActionData, useNavigation } from "@remix-run/react";
import type { ActionFunctionArgs } from "@remix-run/node"; // For type checking action data

// This type can be refined based on the actual action response
export interface ContactActionData extends ActionFunctionArgs {
  message?: string;
  error?: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    message?: string;
  };
}

export default function ContactForm() {
  const actionData = useActionData<ContactActionData>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form method="post" className="space-y-6 max-w-lg mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm text-gray-50"
          aria-describedby="name-error"
        />
        {actionData?.fieldErrors?.name && (
          <p className="mt-1 text-sm text-red-400" id="name-error">
            {actionData.fieldErrors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm text-gray-50"
          aria-describedby="email-error"
        />
        {actionData?.fieldErrors?.email && (
          <p className="mt-1 text-sm text-red-400" id="email-error">
            {actionData.fieldErrors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm text-gray-50"
          aria-describedby="message-error"
        />
        {actionData?.fieldErrors?.message && (
          <p className="mt-1 text-sm text-red-400" id="message-error">
            {actionData.fieldErrors.message}
          </p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:ring-offset-gray-900 disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>

      {actionData?.message && (
        <p className="mt-4 text-sm text-green-400 text-center">{actionData.message}</p>
      )}
      {actionData?.error && (
        <p className="mt-4 text-sm text-red-400 text-center">{actionData.error}</p>
      )}
    </Form>
  );
}
