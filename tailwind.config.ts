/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {},
  		colors: {
  			defult: '#2f3091',
  			'defult-secondary': '#FFFFFF',
  			'defult-button': '#F57C00',
  			border: 'hsl(0 0% 89.8%)',
  			input: 'hsl(0 0% 89.8%)',
  			ring: 'hsl(0 0% 3.9%)',
  			background: 'hsl(0 0% 100%)',
  			foreground: 'hsl(0 0% 3.9%)',
  			primary: {
  				DEFAULT: 'hsl(0 0% 9%)',
  				foreground: 'hsl(0 0% 98%)'
  			},
  			secondary: {
  				DEFAULT: 'hsl(0 0% 96.1%)',
  				foreground: 'hsl(0 0% 9%)'
  			},
  			destructive: {
  				DEFAULT: 'hsl( 0 84.2% 60.2%)',
  				foreground: 'hsl( 0 0% 98%)'
  			},
  			muted: {
  				DEFAULT: 'hsl(0 0% 96.1%)',
  				foreground: 'hsl( 0 0% 45.1%)'
  			},
  			accent: {
  				DEFAULT: 'hsl(0 0% 96.1%)',
  				foreground: 'hsl(0 0% 9%)'
  			},
  			popover: {
  				DEFAULT: 'hsl(0 0% 100%)',
  				foreground: 'hsl(0 0% 3.9%)'
  			},
  			card: {
  				DEFAULT: 'hsl(0 0% 100%)',
  				foreground: 'hsl(0 0% 3.9%)'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(0 0% 98%)',
  				foreground: 'hsl(240 5.3% 26.1%)',
  				primary: 'hsl(240 5.9% 10%)',
  				'primary-foreground': 'hsl( 0 0% 98%)',
  				accent: 'hsl(240 4.8% 95.9%)',
  				'accent-foreground': 'hsl(240 5.9% 10%)',
  				border: 'hsl(220 13% 91%)',
  				ring: 'hsl(217.2 91.2% 59.8%)'
  			}
  		},
  		boxShadow: {
  			'3xl': '0vw 0vw 0.5vw 0vw rgb(32 32 32 / 12%)',
  			'4xl': ' 0vw 0vw 0.5vw 0vw rgb(32 32 32 / 20%)',
  			'5xl': ' 0vw 0.5vw 0.5vw 0vw rgb(32 32 32 / 16%)'
  		},
  		borderRadius: {
  			xl: 'calc(0.5rem + 4px)',
  			lg: '0.5rem',
  			md: 'calc(0.5rem - 2px)',
  			sm: 'calc(0.5rem - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
