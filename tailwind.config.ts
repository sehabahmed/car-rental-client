import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#1DA1F2",         // Example custom blue
        "custom-gray": "#f4f4f4"  // Another custom color
      },
    },
  },
  plugins: [],
}

export default config
