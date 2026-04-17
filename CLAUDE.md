# vue-static-hello-world-app

Minimal Vue 3 + Vite + TypeScript app built into static files by Node.js and served by Zerops Nginx with built-in SPA fallback.

## Zerops service facts

- HTTP port: `5173` (dev server) / `80` (prod nginx)
- Siblings: —
- Runtime base: `nodejs@22` (dev) / `static` (prod)

## Zerops dev

`setup: dev` idles on `zsc noop --silent`; the agent starts the dev server.

- Dev command: `npm run dev`
- In-container rebuild without deploy: `npm run build`

**All platform operations (start/stop/status/logs of the dev server, deploy, env / scaling / storage / domains) go through the Zerops development workflow via `zcp` MCP tools. Don't shell out to `zcli`.**

## Notes

- `VITE_*` vars are embedded into the bundle at build time; set `RUNTIME_VITE_APP_ENV` on the service to override `VITE_APP_ENV` without editing `zerops.yaml`.
- `__BUILD_TIME__` is injected via `vite.config.ts` `define` and changes on every rebuild.
