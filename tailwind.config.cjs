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
			colors: {},
            body: '#000000',
		}
	},
	plugins: []
};
