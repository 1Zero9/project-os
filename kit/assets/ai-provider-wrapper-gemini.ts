/**
 * Minimal fetch-based wrapper around Gemini's generateContent API - no SDK
 * dependency, typed config/request errors. From eolas (parked 2026-09-19).
 *
 * CHECK THE MODEL NAME BEFORE USING. The original hardcoded
 * "gemini-1.5-flash", which is almost certainly stale by the time this is
 * read - model names drift fast and a wrong-but-valid-looking string here
 * fails at request time, not at review time. Verify the current model name
 * against Google's own docs before trusting this default.
 *
 * Requires GEMINI_API_KEY in the environment; GEMINI_MODEL optionally
 * overrides the model.
 */

const DEFAULT_MODEL = "gemini-1.5-flash"; // verify current before using - see note above

export class GeminiConfigError extends Error {}
export class GeminiRequestError extends Error {}

function getConfig() {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL || DEFAULT_MODEL;

  if (!apiKey) {
    throw new GeminiConfigError("GEMINI_API_KEY is not configured.");
  }

  return { apiKey, model };
}

export async function generateGeminiText(prompt: string, maxOutputTokens = 400): Promise<string> {
  const { apiKey, model } = getConfig();

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { maxOutputTokens, temperature: 0.7 },
      }),
    },
  );

  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    const message = payload?.error?.message || `Gemini request failed (${response.status})`;
    throw new GeminiRequestError(message);
  }

  const payload = await response.json();
  const text =
    payload?.candidates?.[0]?.content?.parts
      ?.map((part: { text?: string }) => part.text || "")
      .join("") ?? "";

  if (!text.trim()) {
    throw new GeminiRequestError("Gemini returned an empty response.");
  }

  return text.trim();
}
