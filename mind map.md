# Mind Map: Project Location & Execution

## 📍 Location
The code you are looking for is located in:
- `apps/vibe-coding-platform`

## 🚀 How to Run
To run the project locally, follow these steps:

1. **Navigate to the app directory:**
   ```bash
   cd apps/vibe-coding-platform
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```

4. **Access the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠 Troubleshooting
If you see `ERR_CONNECTION_REFUSED` (as seen in your screenshot), it means the development server is not running or listening on port 3000. 

### Common Causes:
- **Dependencies not installed:** Run `pnpm install` in `apps/vibe-coding-platform`.
- **Server not started:** Run `pnpm dev`.
- **Wrong directory:** Ensure you are in `apps/vibe-coding-platform` or use the root shortcut.

### Simplified Execution
I have added a `dev` script to the root `package.json`. You can now run the app from the root directory using:
```bash
pnpm dev
```
