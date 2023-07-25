import { Configuration, OpenAIApi } from "openai"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { OPENAI_API_KEY } = useRuntimeConfig()

  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(configuration)

  const chat_completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: body.messages || [{ role: "user", content: "Hello world" }],
  })

  return chat_completion.data
})
