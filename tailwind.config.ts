import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        renew: {
          "primary": "#222222",
          "secondary": "#555555",
          "accent": "#5ebab4",
          "neutral": "#1a1a1a",
          "base-100": "#ffffff",
          "base-200": "#fafafa",
          "base-300": "#f0f0f0",
          "info": "#5ebab4",
          "success": "#22c55e",
          "warning": "#eab308",
          "error": "#ef4444",
        },
      },
    ],
  },
}
export default config
