/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	//	darkMode: 'class',
	theme: {
	  extend: {
		colors: {
		  primary: { "50": "#f8f6fc", "100": "#e2d9f1", "200": "#e9d5ff", "300": "#ac92d6", "400": "#c084fc", "500": "#8c67c7", "600": "#764abc", "700": "#5b3794", "800": "#492c78", "900": "#38225b", "950": "#2f1c4d" }
		}
	  },
	},
	plugins: [],
  }
  