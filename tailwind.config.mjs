/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        fg: {
          black: '#0a0a0a',
          card: '#1a1a1a',
          'card-border': '#2a2a2a',
          white: '#f5f5f5',
          muted: '#8a8a8a',
          accent: '#e8ff47',
          'accent-dim': '#b8cc39',
          gold: '#ffd700',
          sheet: '#141414',
          menu: '#1e1e1e',
          green: '#4caf50',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
