/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.astro'],
	darkMode: 'class',
	theme: {
		extend: {},
	},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
