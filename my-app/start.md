# Project Startup Guide

This guide explains how to start, run, and debug the application in the sandbox.

## 1. Install Dependencies

```bash
pnpm install
```

## 2. Run the Development Server

```bash
pnpm run dev
```

The app will start on `http://localhost:3000`. In the sandbox, you can preview it at:

`https://<sandbox_id>.vercel.sh` (replace `<sandbox_id>` with the sandbox name).

## 3. Debugging

- Check the terminal output for errors.
- Use `console.log` statements in the client code.
- For Next.js, you can also inspect the page source and network tab in the browser.

## 4. Build for Production

```bash
pnpm run build
pnpm start
```

The production build serves on `http://localhost:3000` as well.

---

Happy coding!
