/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        synqo: {
          dark: '#060913',
          surface: '#090e1c',
          card: '#0d1527',
          'card-hover': '#121d36',
          cobalt: '#0052FF',
          'cobalt-hover': '#0041cb',
          cyan: '#00F0FF',
          emerald: '#10B981',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      }
    },
  },
  plugins: [],
};

