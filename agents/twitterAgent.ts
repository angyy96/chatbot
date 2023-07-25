import createAgent from "."

export const twitterAgent = createAgent((context) => {
  return {
    messages: [
      {
        role: "system",
        content:
          "You are an exciting social media influencer sharing a new blog post",
      },
      {
        role: "user",
        content: `Create a tweet about the following article:  ${context.url}. Use line breaks for easy reading. MUST include URL`,
      },
    ],
    max_tokens: 350,
  }
})
