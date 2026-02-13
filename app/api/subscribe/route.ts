// app/api/subscribe/route.ts
import { NextResponse } from "next/server";

function isValidEmail(email: string) {
  // “Good enough” validation for a coming-soon capture
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";

    let email = "";

    if (contentType.includes("application/json")) {
      const body = (await req.json()) as { email?: string };
      email = (body.email || "").trim();
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const body = await req.text();
      const params = new URLSearchParams(body);
      email = (params.get("email") || "").trim();
    } else {
      // Fallback: try JSON, then text params
      try {
        const body = (await req.json()) as { email?: string };
        email = (body.email || "").trim();
      } catch {
        const body = await req.text();
        const params = new URLSearchParams(body);
        email = (params.get("email") || "").trim();
      }
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // TODO: wire to your real destination later (Klaviyo, Brevo, DB, etc.)
    // For now: succeed so the UI works and Vercel builds.
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}

// Optional: sanity check in browser / uptime monitors
export async function GET() {
  return NextResponse.json({ ok: true }, { status: 200 });
}
