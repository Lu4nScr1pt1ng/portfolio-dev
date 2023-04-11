/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			primary: 'Poppins'
		},
		container: {
			padding: {
				DEFAULT: '1rem'
			}
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1280px',
			xl: '1676px'
		},
		extend: {
			colors: {
				primary: "#CBEBEC",
				secondary: "#9B9191",
				expose: "#64FFDA"
			},
            body: '#000000',
		}
	},
	plugins: []
};
