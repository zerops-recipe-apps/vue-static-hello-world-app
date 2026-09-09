# vue-static-hello-world-app

Minimal Vue 3 + Vite + TypeScript app built into static files by Node.js and served by Zerops Nginx with built-in SPA fallback.

## Zerops service facts

- HTTP port: dev `5173` (vite dev) / prod `80` (nginx)
- Siblings: —
- Runtime base: dev `nodejs@24` / prod `static`

## Zerops dev

`setup: dev` idles on `zsc noop --silent`; the agent starts the dev server.

- Dev command: `npm run dev -- --host 0.0.0.0`
- In-container rebuild without deploy: `npm run build`

**All platform operations (start/stop/status/logs of the dev server, deploy, env / scaling / storage / domains) go through the Zerops development workflow via `zcp` MCP tools. Don't shell out to `zcli`.**

## Notes

- `VITE_*` vars are embedded into the bundle at build time; set `RUNTIME_VITE_APP_ENV` on the service to override `VITE_APP_ENV` without editing `zerops.yaml`.
- Favicon lives in `public/favicon.ico` and is referenced from `index.html`.
- Uses TypeScript 5.9.3 — `vue-tsc` does not yet support TypeScript 7.
