import fetch from "node-fetch";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function translateText(text, targetLang) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `Translate the following text to ${targetLang}. Keep meaning natural.`,
        },
        {
          role: "user",
          content: text,
        },
      ],
    }),
  });

  const data = await res.json();
  return data.choices?.[0]?.message?.content || text;
}