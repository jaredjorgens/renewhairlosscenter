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
          "primary": "#6d6863",
          "secondary": "#BB8559",
          "accent": "#908E79",
          "neutral": "#6d6863",
          "base-100": "#FFFFFF",
          "base-200": "#f7f6f4",
          "base-300": "#C6C1BB",
          "info": "#908E79",
          "success": "#908E79",
          "warning": "#BB8559",
          "error": "#ef4444",
        },
      },
    ],
  },
}
export default config
