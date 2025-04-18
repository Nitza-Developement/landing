import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(245 130 32 / var(--tw-text-opacity));',
        'primary-950': 'rgb(67 20 7 / var(--tw-text-opacity));',
        'primary/10': '#f582201a',
      },
    },
  },
  plugins: [],
};

export default config;


