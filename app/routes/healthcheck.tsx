// learn more: https://fly.io/docs/reference/configuration/#services-http_checks
import type { LoaderFunctionArgs } from "@remix-run/node";

// Prisma import removed as db.server.ts is deleted

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const host =
    request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");

  try {
    const url = new URL("/", `http://${host}`);
    // Now we only make a HEAD request to ourselves to check if the app is responsive.
    // The database check (prisma.user.count()) is removed.
    await fetch(url.toString(), { method: "HEAD" }).then((r) => {
      if (!r.ok) return Promise.reject(r);
    });
    return new Response("OK");
  } catch (error: unknown) {
    console.log("healthcheck ❌", { error });
    return new Response("ERROR", { status: 500 });
  }
};
