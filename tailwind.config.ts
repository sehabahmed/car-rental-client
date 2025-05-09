import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Tailwind blue-500
          dark: '#2563EB',    // blue-600
          light: '#60A5FA',   // blue-400
        },
      },
    },
  },
  plugins: [],
}
export default config
