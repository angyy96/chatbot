import { Configuration, OpenAIApi } from "openai"
import { customerSupportAgent } from "~~/agents"
import * as agents from "@/agents/index"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const agent: string = body.agent || "customerSupportAgent"

  if (Object.keys(agents).includes(agent)) {
    throw new Error(`${agent} doesn't exist`)
  }
  const { OPENAI_API_KEY } = useRuntimeConfig()

  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(configuration)

  const chat_completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: body.messages || [{ role: "user", content: "Hello world" }],
    temperature: body.temperature || 1,
    // @ts-expect-error checking above if the agent exists
    ...agents[agent](body),
  })

  return chat_completion.data
})
