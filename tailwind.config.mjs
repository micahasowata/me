/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	content: ['./src/**/*.astro'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sora: ['Sora Variable', ...defaultTheme.fontFamily.sans],
      		},
		},
	},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
