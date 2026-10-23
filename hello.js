import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "",
});

const response = await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: "Hello, how are you?" }],
});

console.log(response.choices[0]);
