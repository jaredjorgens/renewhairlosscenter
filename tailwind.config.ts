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
          "primary": "#1a1a1a",
          "secondary": "#4a5568",
          "accent": "#14b8a6",
          "neutral": "#262626",
          "base-100": "#ffffff",
          "base-200": "#f8f8f8",
          "base-300": "#e5e5e5",
          "info": "#0ea5e9",
          "success": "#22c55e",
          "warning": "#eab308",
          "error": "#ef4444",
        },
      },
    ],
  },
}
export default config
