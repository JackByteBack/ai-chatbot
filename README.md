<p align="center">
  <img src="Firefly.png" alt="Jack AI" height="80" />
  <h1 align="center">Jack AI — Vibe Coding Platform</h1>
  <p align="center">
    An AI-powered, full-stack vibe coding platform. Describe what you want to build — the AI agent writes the code, spins up a sandbox, and gives you a live preview.
  </p>
  <p align="center">
    Built by <strong>Jack Obito</strong> · BCA Student @ TCET Mumbai
  </p>
</p>

---

## 📑 Table of Contents

- [✨ What is this?](#-what-is-this)
- [🔁 How it works](#-how-it-works)
- [🚀 Features](#-features)
- [🧠 Supported Models](#-supported-models)
- [🛠️ AI Agent Tools](#️-ai-agent-tools)
- [🖥️ App Tour](#️-app-tour)
- [🔌 API Reference](#-api-reference)
- [🗂️ Repo Structure](#️-repo-structure)
- [⚙️ Getting Started (Local)](#️-getting-started-local)
- [🔑 Environment Variables](#-environment-variables)
- [📜 Scripts](#-scripts)
- [🛠️ Debugging](#️-debugging)
- [🤖 Example Prompts](#-example-prompts)
- [📦 Tech Stack](#-tech-stack)
- [☁️ Deploy to Vercel](#️-deploy-to-vercel)
- [👤 Developer](#-developer)
- [📄 License](#-license)

---

## ✨ What is this?

This is a **monorepo** (forked from Vercel Examples) containing a production-grade AI coding assistant app at `apps/vibe-coding-platform`. You type a prompt, the AI agent generates a full-stack application inside a secure sandboxed environment, with real-time logs, file explorer, and live preview — all in the browser.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=A+full-stack+coding+platform+built+with+Vercel%27s+AI+Cloud%2C+AI+SDK%2C+and+Next.js.&demo-title=Vibe+Coding+Platform&repository-url=https%3A%2F%2Fgithub.com%2FJackByteBack%2Fai-chatbot&project-name=jack-ai&repository-name=jack-ai&from=vibe-coding-platform-app)

---

## 🔁 How it works

1. **You chat** — describe the app you want in the chat panel, pick a model and a reasoning effort (`low` / `medium`).
2. **The agent plans and builds** — `POST /api/chat` streams the response with the [AI SDK](https://ai-sdk.dev), giving the model up to **20 tool-call steps** per turn so it can scaffold, write, run, and fix code autonomously.
3. **Files are generated** — the `generateFiles` tool writes the app into the project workspace (locally: the `my-app/` directory).
4. **Commands run live** — the `runCommand` tool executes dev servers, builds, and scripts; stdout/stderr are streamed token-by-token to the Logs panel.
5. **You watch and preview** — the File Explorer shows every generated file, the Preview panel renders the running app, and any runtime errors are reported back to the agent so it can **auto-fix** them.
6. **You deploy** — happy with the result? Ship it to Vercel in one click.

---

## 🚀 Features

| Feature | Description |
|---|---|
| 🤖 **Multi-Model AI** | Switch between Claude, GPT, Llama, DeepSeek, Kimi, and more |
| 🏖️ **Live Sandbox** | Secure code execution via Vercel Sandbox with live preview |
| 📁 **File Explorer** | Browse and inspect all generated project files |
| 📋 **Command Logs** | Real-time terminal output from the sandbox |
| 🛠️ **Error Monitor** | Detects and auto-fixes runtime errors |
| ⚡ **One-Click Deploy** | Deploy any generated app directly to Vercel |
| 🎛️ **Reasoning Control** | Adjustable reasoning effort (low / medium / high) |
| 🛡️ **Bot Protection** | Chat API is guarded by BotID (bots get a `403`) |
| 📱 **Responsive UI** | Resizable panels on desktop, tabbed layout on mobile |

---

## 🧠 Supported Models

| Model | Provider | Model ID |
|---|---|---|
| Claude Opus 4.6 | Anthropic | `anthropic/claude-opus-4.6` |
| GPT 5.4 | OpenAI | `openai/gpt-5.4` |
| Llama 3.3 70B *(default)* | Meta | `meta/llama-3.3-70b-instruct` |
| DeepSeek V4 Pro | DeepSeek | `deepseek-ai/deepseek-v4-pro` |
| Kimi K2.6 | Moonshot AI | `moonshotai/kimi-k2.6` |
| MiniMax M2.7 | MiniMax | `minimaxai/minimax-m2.7` |
| Qwen 2.5 72B | Alibaba | `qwen/qwen-2.5-72b-instruct` |
| GLM 5.1 | Zhipu AI | `z-ai/glm-5.1` |
| Gemma 4 31B | Google | `google/gemma-4-31b-it` |
| GPT OSS 20B | OpenAI | `openai/gpt-oss-20b` |

All models are served through a single OpenAI-compatible gateway (`https://integrate.api.nvidia.com/v1`, see `apps/vibe-coding-platform/ai/gateway.ts`). Each provider can have its own API key; anything without a dedicated key falls back to `AI_GATEWAY_API_KEY`. The full list is also available at runtime via `GET /api/models`.

---

## 🛠️ AI Agent Tools

The agent in `apps/vibe-coding-platform/ai/tools/` has four tools:

| Tool | What it does |
|---|---|
| `createSandbox` | Provisions a sandbox session for the build (local mode returns the `local` sandbox). |
| `generateFiles` | Writes the generated project files into the workspace. |
| `getSandboxURL` | Resolves the preview URL for the running app. |
| `runCommand` | Runs a shell command (dev server, build, install…). Supports background execution (`wait: false`) with live log streaming. |

Chat responses stream with `sendReasoning: true`, up to `4096` output tokens per step, `10` retries, and automatic rate-limit logging — see `apps/vibe-coding-platform/app/api/chat/route.ts`.

---

## 🖥️ App Tour

The main page (`apps/vibe-coding-platform/app/page.tsx`) is a four-pane IDE:

| Pane | What you get |
|---|---|
| 💬 **Chat** | Conversation with the agent, model picker, reasoning-effort control, error reporting. |
| 👁️ **Preview** | Live preview of the generated app via the sandbox URL. |
| 📁 **File Explorer** | Tree + content viewer for every generated file (`GET /api/sandboxes/[sandboxId]/files?path=…`). |
| 📋 **Logs** | Per-command terminal streams (`…/cmds/[cmdId]/logs`) plus final exit codes (`…/cmds/[cmdId]`). |

On desktop the panes are resizable (sizes persist in cookies); on mobile they become Chat / Preview / File Explorer / Logs tabs. A welcome modal introduces first-time visitors.

---

## 🔌 API Reference

Base path: `apps/vibe-coding-platform/app/api/`

| Method & Route | Purpose |
|---|---|
| `POST /api/chat` | Stream a chat completion with tools (`messages`, `modelId`, `reasoningEffort`). |
| `GET /api/models` | List supported models (`[{ id, name }]`). |
| `POST /api/errors` | Report runtime errors from the preview back to the agent loop. |
| `GET /api/sandboxes/[sandboxId]` | Check sandbox status (`running` / `stopped`). |
| `GET /api/sandboxes/[sandboxId]/files?path=…` | Read a generated file. |
| `GET /api/sandboxes/[sandboxId]/cmds/[cmdId]` | Get a command's `startedAt` / `exitCode`. |
| `GET /api/sandboxes/[sandboxId]/cmds/[cmdId]/logs` | Stream a command's stdout/stderr logs. |

---

## 🗂️ Repo Structure

```
ai-chatbot/
├── apps/
│   └── vibe-coding-platform/     ← ✅ Main app (start here)
│       ├── ai/                   # Gateway, model constants, agent tools
│       │   ├── constants.ts      # Model IDs, names, default model
│       │   ├── gateway.ts        # NVIDIA OpenAI-compatible gateway + key routing
│       │   ├── messages/         # Data parts & message metadata
│       │   └── tools/            # createSandbox, generateFiles, getSandboxURL, runCommand
│       ├── app/                  # Next.js App Router pages + API routes
│       │   ├── api/chat/         # Streaming chat endpoint (+ system prompt)
│       │   ├── api/models/       # Supported-models endpoint
│       │   ├── api/errors/       # Runtime-error reporting endpoint
│       │   └── api/sandboxes/    # Sandbox status / files / commands / logs
│       ├── components/           # Chat, preview, file-explorer, logs, settings UI
│       ├── lib/                  # Shared utilities
│       ├── public/               # Static assets
│       └── .env.example          # Required environment variables
├── app-directory/
│   └── jack/                     # Minimal Next.js demo scaffold
├── my-app/                       # Local workspace where generated apps land
├── solutions/                    # Vercel example solutions
├── start.md                      # Local dev guide & debugging notes
├── mind map.md                   # Project navigation quick-reference
└── README.md                     ← You are here
```

---

## ⚙️ Getting Started (Local)

### Prerequisites

- **Node.js** `24.x` — required by the vibe platform
- **pnpm** `9.x` — repo uses pnpm workspaces (plain `npm` works too)

```bash
# Install Node 24 (macOS/Homebrew)
brew install node@24
export PATH="/opt/homebrew/opt/node@24/bin:$PATH"
```

### 1. Install dependencies

```bash
# From repo root
HUSKY=0 pnpm install --force
```

> `HUSKY=0` avoids errors if the `.git` directory isn't in the expected location.

### 2. Set up environment variables

```bash
cd apps/vibe-coding-platform
cp .env.example .env.local
```

Fill in your API keys in `.env.local` (see [Environment Variables](#-environment-variables) below).

### 3. Run the app

```bash
cd apps/vibe-coding-platform
pnpm dev        # or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — if port 3000 is busy, Next.js will pick the next available port.

> Tip: run the app **directly from `apps/vibe-coding-platform`**, not from the repo root — the root has strict `engines` constraints from unrelated workspace packages.

---

## 🔑 Environment Variables

All keys live in `apps/vibe-coding-platform/.env.local` (see `.env.example`). Every per-model key is optional — unset ones fall back to `AI_GATEWAY_API_KEY`.

| Variable | Used for |
|---|---|
| `AI_GATEWAY_API_KEY` | Default/fallback key for all models (Llama 3.3 & Qwen always use this) |
| `ANTHROPIC_API_KEY` | Claude Opus 4.6 |
| `OPENAI_API_KEY` | GPT 5.4 |
| `DEEPSEEK_API_KEY` | DeepSeek V4 Pro |
| `KIMI_API_KEY` | Kimi K2.6 |
| `MINIMAX_API_KEY` | MiniMax M2.7 |
| `GLM_API_KEY` | GLM 5.1 |
| `GEMMA_API_KEY` | Gemma 4 31B |
| `GPT_OSS_API_KEY` | GPT OSS 20B |

You only need keys for the models you actually plan to use — set `AI_GATEWAY_API_KEY` plus any provider-specific overrides.

---

## 📜 Scripts

From `apps/vibe-coding-platform/`:

| Command | What it does |
|---|---|
| `pnpm dev` / `npm run dev` | Start Next.js dev server with Turbopack |
| `pnpm build` / `npm run build` | Production build |
| `pnpm start` / `npm run start` | Serve the production build |
| `pnpm lint` / `npm run lint` | Run Next.js lint |
| `pnpm type-check` | Run `tsc --noEmit` |

---

## 🛠️ Debugging

### Quick health check

```bash
curl -I http://localhost:3000
```

### Debug server-side code (API routes / Server Components)

```bash
NODE_OPTIONS="--inspect=9229" pnpm dev
```

Then attach a debugger:
- **Chrome**: `chrome://inspect` → "Open dedicated DevTools for Node"
- **VS Code**: add a `Node: Attach` config pointing to port `9229`

### Debug client-side (React)

Use browser DevTools → Sources tab, or add `debugger;` / `console.log()` statements.

### Common issues

| Problem | Fix |
|---|---|
| `ERR_CONNECTION_REFUSED` | Server isn't running — `cd apps/vibe-coding-platform && pnpm dev` |
| `engines` mismatch on root `pnpm dev` | Run from `apps/vibe-coding-platform` directly, not repo root |
| Install fails behind proxy | Unset proxy vars: `env -u ALL_PROXY -u HTTPS_PROXY HUSKY=0 pnpm install --force` |
| `shiki` externalization warnings | Non-fatal — app runs fine |

---

## 🤖 Example Prompts

```
Generate a Next.js app that allows listing and searching Pokémon
Create a Golang server that responds "Hello World" to any request
Build a to-do app with local storage and dark mode
Create a weather dashboard using the OpenWeatherMap API
Build a markdown notes app with live preview
Create a REST API with user authentication and SQLite storage
```

---

## 📦 Tech Stack

- [Next.js 16](https://nextjs.org) with Turbopack + [React 19](https://react.dev)
- [AI SDK v6](https://ai-sdk.dev) — streaming, tool calling, multi-model
- [Vercel AI Gateway](https://vercel.com/docs/ai-gateway) — unified model API
- [Vercel Sandbox](https://vercel.com/docs/vercel-sandbox) — secure code execution
- [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- [TypeScript](https://typescriptlang.org), [Zustand](https://zustand.docs.pmnd.rs) (state), [nuqs](https://nuqs.47ng.com) (URL state)

---

## ☁️ Deploy to Vercel

1. Click **Deploy with Vercel** above (or import the repo manually).
2. Set the **Root Directory** to `apps/vibe-coding-platform`.
3. Add the [environment variables](#-environment-variables) you need.
4. Deploy — the chat, sandbox, preview, and logs all work in production.

---

## 👤 Developer

Made by **Jack Obito** (`JackByteBack`) — BCA student at **TCET Mumbai**, passionate about full-stack web development, AI tooling, and VR/XR.

- GitHub: [@JackByteBack](https://github.com/JackByteBack)

---

## 📄 License

MIT
