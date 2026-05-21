import { createOpenAI } from '@ai-sdk/openai'
import { Models } from './constants'
import type { JSONValue } from 'ai'
import type { LanguageModelV3 } from '@ai-sdk/provider'

const nvidia = (apiKey?: string) => createOpenAI({
  baseURL: 'https://integrate.api.nvidia.com/v1',
  apiKey: apiKey || process.env.AI_GATEWAY_API_KEY,
  headers: {
    'Accept': 'application/json',
  }
})

export interface ModelOptions {
  model: LanguageModelV3
  providerOptions?: Record<string, Record<string, JSONValue>>
  headers?: Record<string, string>
}

export function getModelOptions(
  modelId: string,
  options?: { reasoningEffort?: 'low' | 'medium' | 'high' }
): ModelOptions {
  let apiKey: string | undefined

  if (modelId === Models.Minimax) {
    apiKey = process.env.MINIMAX_API_KEY
  } else if (modelId === Models.Kimi) {
    apiKey = process.env.KIMI_API_KEY
  } else if (modelId === Models.DeepseekV4) {
    apiKey = process.env.DEEPSEEK_API_KEY
  } else if (modelId === Models.Glm5) {
    apiKey = process.env.GLM_API_KEY
  } else if (modelId === Models.Gemma4) {
    apiKey = process.env.GEMMA_API_KEY
  } else if (modelId === Models.GptOss20b) {
    apiKey = process.env.GPT_OSS_API_KEY
  } else if (modelId === Models.ClaudeOpus4_6) {
    apiKey = process.env.ANTHROPIC_API_KEY
  } else if (modelId === Models.Gpt5_4) {
    apiKey = process.env.OPENAI_API_KEY
  } else if (modelId === Models.Qwen || modelId === Models.Llama3_3) {
    apiKey = process.env.AI_GATEWAY_API_KEY
  }

  const effectiveApiKey = apiKey || process.env.AI_GATEWAY_API_KEY

  return {
    model: nvidia(effectiveApiKey).chat(modelId),
  }
}
