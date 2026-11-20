/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A1A33',
          blue: '#0B6FA4',
          cyan: '#22B8EF',
          cyanLight: '#7FD3F5',
          orange: '#FF7A1A',
          orangeHover: '#FF8F3F',
          mist: '#BFD3E6',
          muted: '#4E617A',
          body: '#1E2E45',
          ink: '#0E1B2E',
          line: '#DCE5EE',
          surface: '#F4F7FB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 20px 50px -12px rgba(10, 26, 51, 0.25)',
        dramatic: '0 12px 32px -8px rgba(10, 26, 51, 0.45)',
      },
    },
  },
  plugins: [],
};
