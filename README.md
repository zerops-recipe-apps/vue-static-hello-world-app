# Vue Hello World Recipe App

<!-- #ZEROPS_EXTRACT_START:intro# -->
A minimal Vue 3 + Vite + TypeScript app deployed as a static site on [Zerops](https://zerops.io), demonstrating build-time environment variable injection via the `VITE_*` prefix convention.
Used within [Vue Hello World recipe](https://app.zerops.io/recipes/vue-hello-world) for [Zerops](https://zerops.io) platform.
<!-- #ZEROPS_EXTRACT_END:intro# -->

⬇️ **Full recipe page and deploy with one-click**

[![Deploy on Zerops](https://github.com/zeropsio/recipe-shared-assets/blob/main/deploy-button/light/deploy-button.svg)](https://app.zerops.io/recipes/vue-hello-world?environment=small-production)

![vue cover](https://github.com/zeropsio/recipe-shared-assets/blob/main/covers/svg/cover-vue.svg)

## Integration Guide

<!-- #ZEROPS_EXTRACT_START:integration-guide# -->

### 1. Adding `zerops.yaml`
The main application configuration file you place at the root of your repository. It tells Zerops how to build, deploy, and run your application.

```yaml
zerops:
  # The 'prod' setup compiles Vue source into static HTML/CSS/JS
  # for Nginx serving. Use for production, stage, and preview deploys.
  - setup: prod
    build:
      # Build with Node.js (npm/npx available), serve with Nginx.
      # The build container compiles Vue source into static assets —
      # Node.js is NOT present at runtime.
      base: nodejs@24

      # VITE_* variables are embedded into the bundle at build time.
      # Zerops runtime env vars are accessible during build with the
      # RUNTIME_ prefix — set RUNTIME_VITE_APP_ENV on the service to
      # override this value without changing zerops.yaml.
      envVariables:
        VITE_APP_ENV: production

      buildCommands:
        # npm ci installs exact versions from package-lock.json —
        # reproducible builds, faster than npm install.
        - npm ci
        # vue-tsc type-checks, then vite builds optimized static assets.
        - npm run build

      # Strip 'dist/' prefix — contents become the Nginx document root,
      # so dist/index.html is served at /.
      deployFiles:
        - dist/~

      cache:
        - node_modules

    run:
      # Nginx serves the compiled static assets. No Node.js at runtime —
      # the static service is pure Nginx with built-in SPA fallback
      # (unmatched paths serve /index.html for client-side routing).
      base: static

  # The 'dev' setup deploys full source code so a developer can SSH in
  # and start the Vite dev server immediately. Not for serving traffic.
  - setup: dev
    build:
      base: nodejs@24
      os: ubuntu

      # npm install (not npm ci) — tolerates a missing or outdated
      # package-lock.json, which is common in a fresh dev workspace.
      buildCommands:
        - npm install

      # Deploy the entire working directory including source files,
      # so the developer has everything needed to run 'npm run dev'.
      deployFiles: ./

      cache:
        - node_modules

    run:
      # nodejs@24 runtime — developer needs Node.js to run the Vite
      # dev server via SSH. Static runtime is not used here.
      base: nodejs@24
      os: ubuntu

      # Keep the container alive without starting any server.
      # Developer starts 'npm run dev' manually via SSH.
      start: zsc noop --silent
```

<!-- #ZEROPS_EXTRACT_END:integration-guide# -->
