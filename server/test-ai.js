
import "dotenv/config";

const url =
  `${process.env.OPENAI_BASE_URL.replace(/\/$/, "")}/chat/completions`;

try {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL,
      messages: [
        { role: "user", content: "Reply with OK." }
      ],
    }),
  });

  console.log("HTTP status:", response.status);
  console.log("Response body:", await response.text());
} catch (error) {
  console.error("Network error:", error.message);
}