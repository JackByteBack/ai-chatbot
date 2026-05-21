export enum Models {
  Minimax = 'minimaxai/minimax-m2.7',
  Kimi = 'moonshotai/kimi-k2.6',
  DeepseekV4 = 'deepseek-ai/deepseek-v4-pro',
  Glm5 = 'z-ai/glm-5.1',
  Gemma4 = 'google/gemma-4-31b-it',
  GptOss20b = 'openai/gpt-oss-20b',
  Qwen = 'qwen/qwen-2.5-72b-instruct',
  Llama3_3 = 'meta/llama-3.3-70b-instruct',
  ClaudeOpus4_6 = 'anthropic/claude-opus-4.6',
  Gpt5_4 = 'openai/gpt-5.4',
}

export const DEFAULT_MODEL = Models.Llama3_3

export const SUPPORTED_MODELS: string[] = [
  Models.Minimax,
  Models.Kimi,
  Models.DeepseekV4,
  Models.Glm5,
  Models.Gemma4,
  Models.GptOss20b,
  Models.Qwen,
  Models.Llama3_3,
  Models.ClaudeOpus4_6,
  Models.Gpt5_4,
]

export const MODEL_NAMES: Record<string, string> = {
  [Models.Minimax]: 'MiniMax M2.7',
  [Models.Kimi]: 'Kimi K2.6',
  [Models.DeepseekV4]: 'DeepSeek V4 Pro',
  [Models.Glm5]: 'GLM 5.1',
  [Models.Gemma4]: 'Gemma 4 31B IT',
  [Models.GptOss20b]: 'GPT OSS 20B',
  [Models.Qwen]: 'Qwen 2.5 72B',
  [Models.Llama3_3]: 'Llama 3.3 70B',
  [Models.ClaudeOpus4_6]: 'Claude Opus 4.6',
  [Models.Gpt5_4]: 'GPT 5.4',
}

export const TEST_PROMPTS = [
  'Generate a Next.js app that allows to list and search Pokemons',
  'Create a `golang` server that responds with "Hello World" to any request',
  'Create a start.md file explaining how to start, run, and debug this code',
  'Run this code',
]
