import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: '#F5F0E8',
        rose: {
          DEFAULT: '#D4A5A5',
          50: '#FBF5F5',
          100: '#F5E5E5',
          200: '#E8C8C8',
          300: '#D4A5A5',
          400: '#C28585',
          500: '#A86868',
        },
        teal: {
          DEFAULT: '#1A3B3B',
          50: '#E6EAEA',
          100: '#B5C2C2',
          200: '#7A9090',
          300: '#3F5F5F',
          400: '#1A3B3B',
          500: '#102828',
          600: '#0A1B1B',
        },
        ivory: '#FFF9F0',
        charcoal: '#2C2C2C',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.25em',
        'widest-3': '0.4em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
