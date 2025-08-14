Editing Guardrails for AI

    Do NOT introduce a second copy of the spots data. Always use the named export spots from src/app/spots/data.ts.

    Keep page signatures compatible with Next 15 (see CONTEXT.md).

    Use next/link for internal links; next/image for images.

    Keep /add-spot operational. If FORM_EMBED_URL is empty, the fallback email CTA must remain.

    Preserve Plausible <Script> in the layout. Do not remove custom data- attributes.

    Before pushing, ensure npm run build passes locally (or let Vercel build pass).

    Prefer full-file replacements when instructed; otherwise keep diffs minimal and focused.
