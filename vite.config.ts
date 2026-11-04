/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuração do Vitest (Prompt 1 — infraestrutura de testes).
  // O Vitest reaproveita este mesmo arquivo do Vite, por isso não precisa
  // de um vitest.config.ts separado.
  test: {
    // Os testes atuais são de regras puras (sem tela), então 'node' basta.
    environment: 'node',
    // Testes ficam junto do código, em src/, com sufixo .test.ts ou .spec.ts.
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    // Quando o Vitest foi configurado ainda não havia testes; sem isto o
    // "npm test" sairia com erro e travaria o pre-commit do husky.
    passWithNoTests: true,
  },
})
