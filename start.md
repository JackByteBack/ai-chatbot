# Running + Debugging (local)

This repo is a monorepo with many examples. The root `pnpm dev` can fail due to strict `engines` requirements in unrelated packages, so **run the app directly** from `apps/vibe-coding-platform` instead.

## Prereqs

- **Node.js**: `24.x` (this app expects Node 24; newer Node versions can break native deps)
- **pnpm**: `9.x` (repo root declares `pnpm@9.13.0`)

### Install Node 24 (macOS / Homebrew)

```bash
brew install node@24
```

Use Node 24 for the rest of the commands in this doc:

```bash
export PATH="/opt/homebrew/opt/node@24/bin:$PATH"
node -v
```

## Install dependencies

From repo root:

```bash
cd "/Users/jack_obito/Desktop/examples-main"
HUSKY=0 pnpm install --force
```

Notes:
- `HUSKY=0` is used because this folder may not contain a `.git/` directory, and Husky otherwise errors during `prepare`.
- If you have a corporate/local proxy set, installs may fail fetching from GitHub. If that happens, rerun with proxy vars unset:

```bash
cd "/Users/jack_obito/Desktop/examples-main"
export PATH="/opt/homebrew/opt/node@24/bin:$PATH"
env -u ALL_PROXY -u all_proxy \
    -u HTTP_PROXY -u http_proxy \
    -u HTTPS_PROXY -u https_proxy \
    -u NO_PROXY -u no_proxy \
    -u SOCKS_PROXY -u socks_proxy \
    -u SOCKS5_PROXY -u socks5_proxy \
    -u GIT_HTTP_PROXY -u GIT_HTTPS_PROXY \
    HUSKY=0 pnpm install --force
```

## Start the app (recommended)

Start the Next.js app directly:

```bash
cd "/Users/jack_obito/Desktop/examples-main/apps/vibe-coding-platform"
export PATH="/opt/homebrew/opt/node@24/bin:$PATH"
pnpm dev
```

Then open:
- `http://localhost:3000` (default)
- If 3000 is taken, Next will pick another port (commonly `http://localhost:3001`).

## Why not `pnpm dev` at the repo root?

The root `pnpm dev` runs a filtered dev command, but pnpm may still enforce `engines` constraints from other workspace packages and error out (for example, `microfrontends/nextjs-multi-zones` requires Node 20 and pnpm 9.4.0).

## Debugging

### 1) Quick checks

- **Server is up**:

```bash
curl -I http://localhost:3000
```

- **Check logs**: keep the `pnpm dev` terminal visible; Next prints compile/runtime errors there.

### 2) Debug server code (API routes, server components)

Run Next with the Node inspector enabled:

```bash
cd "/Users/jack_obito/Desktop/examples-main/apps/vibe-coding-platform"
export PATH="/opt/homebrew/opt/node@24/bin:$PATH"
NODE_OPTIONS="--inspect=9229" pnpm dev
```

Then attach a debugger:
- **Chrome**: open `chrome://inspect` → “Open dedicated DevTools for Node”
- **VS Code / Cursor**: create a “Node: Attach” config to port `9229`

### 3) Debug client code (React components)

- Use **browser DevTools** (Sources tab) for breakpoints.
- Add temporary `console.log()` or `debugger;` statements.

### 4) Common warnings you might see

- **“Port 3000 is in use”**: Next will automatically switch to another port; use the printed URL.
- **`shiki` externalization warnings**: you may see warnings about `shiki` not being resolved as an external package. The app can still start; treat it as a warning unless it causes runtime failures.

## Bonus: Go “Hello World” server (any route)

This is a tiny Go server that responds with `Hello World` to **any** request path/method.

### Run it

```bash
cd "/Users/jack_obito/Desktop/examples-main/golang/hello-world-server"
go run .
```

Then test it:

```bash
curl -i http://127.0.0.1:8080/anything
```

### Debug it (Delve)

```bash
cd "/Users/jack_obito/Desktop/examples-main/golang/hello-world-server"
dlv debug --headless --listen=:2345 --api-version=2
```

Attach your debugger to `localhost:2345` (Go / Delve).

## About the developer

This setup and the extra features in this specific AI were created by **Jack** — a **BCA department** student from **TCET**. He’s currently learning **web development**.

