<script setup lang="ts">
import { version } from 'vue'

// Build-time constants — both are baked into the bundle by `vite build`.
// __BUILD_TIME__ is defined in vite.config.ts via `define`.
// VITE_APP_ENV is injected by Zerops from build.envVariables in zerops.yaml.
const appEnv = import.meta.env.VITE_APP_ENV ?? 'local'
const buildTime = __BUILD_TIME__
</script>

<template>
  <main>
    <div class="card">
      <div class="logo" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69">
          <path d="M161.096.001l-30.224 52.35L100.647.001H0l130.872 226.688L261.76.001z" fill="#41b883"/>
          <path d="M161.096.001l-30.224 52.35L100.647.001H52.346l78.526 136.01L209.4.001z" fill="#34495e"/>
        </svg>
      </div>

      <h1 class="framework">Vue <span class="version">{{ version }}</span></h1>

      <p class="greeting">Hello from Zerops!</p>

      <div class="meta">
        <div class="meta-row">
          <span class="meta-label">Environment</span>
          <span class="meta-value env-badge">{{ appEnv }}</span>
        </div>
        <div class="meta-row">
          <span class="meta-label">Built at</span>
          <span class="meta-value">{{ buildTime }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.card {
  background: #1a1a1a;
  border: 1px solid #2e2e2e;
  border-radius: 16px;
  padding: 3rem 3.5rem;
  max-width: 480px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.4);
}

.logo svg {
  width: 72px;
  height: auto;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 20px rgba(65, 184, 131, 0.3));
}

.framework {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
  margin-bottom: 0.75rem;
}

.version {
  color: #42b883;
}

.greeting {
  font-size: 1.25rem;
  color: #a0a0a0;
  margin-bottom: 2rem;
}

.meta {
  background: #111;
  border: 1px solid #2a2a2a;
  border-radius: 10px;
  overflow: hidden;
}

.meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  gap: 1rem;
}

.meta-row + .meta-row {
  border-top: 1px solid #2a2a2a;
}

.meta-label {
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #555;
  white-space: nowrap;
}

.meta-value {
  font-size: 0.875rem;
  color: #ccc;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  text-align: right;
}

.env-badge {
  background: rgba(65, 184, 131, 0.12);
  color: #42b883;
  border: 1px solid rgba(65, 184, 131, 0.25);
  border-radius: 6px;
  padding: 0.2rem 0.6rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  font-family: inherit;
}
</style>
