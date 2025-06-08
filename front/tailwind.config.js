/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				abrilFatface: ['Abril Fatface', 'cursive'],
			},
			fontWeight: {
				abrilWeight: [400],
			},
			height: {
				120: '30rem',
			},
		},
	},

	plugins: [require('tailwindcss-animated')],
};
