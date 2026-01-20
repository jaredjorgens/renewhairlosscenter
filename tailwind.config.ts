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
          "primary": "#1f1f1f",          // Rich near-black - sophistication, strong contrast
          "secondary": "#BB8559",         // Warm copper - luxury accent
          "accent": "#908E79",            // Your olive - signature brand color
          "neutral": "#2d2d2d",           // Deep charcoal
          "base-100": "#FFFFFF",          // Clean white
          "base-200": "#faf9f7",          // Subtle warm white
          "base-300": "#f0eeeb",          // Light warm gray for sections
          "info": "#908E79",
          "success": "#6b7c5e",           // Deeper olive for success states
          "warning": "#BB8559",
          "error": "#c45c5c",
        },
      },
    ],
  },
}
export default config
