/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: "#06b6d4",
				darkBg: "#00050b",
				darkCard: "#031122",
			},
			animation: {
				'text-gradient': 'text-gradient 3s linear infinite',
				'bg-shift': 'bg-shift 10s ease infinite',
				'electric': 'electric 1.5s ease-in-out infinite alternate',
				'electric-dash': 'electric-dash 3s linear infinite',
				'spin-slow': 'spin 8s linear infinite',
				'float': 'float 6s ease-in-out infinite',
			},
			keyframes: {
				'text-gradient': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				'bg-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				'electric': {
					'0%': { boxShadow: '0 0 5px rgba(6, 182, 212, 0.5), 0 0 20px rgba(6, 182, 212, 0.3)', borderColor: 'rgba(6, 182, 212, 0.5)' },
					'100%': { boxShadow: '0 0 10px rgba(34, 211, 238, 0.8), 0 0 40px rgba(34, 211, 238, 0.6)', borderColor: 'rgba(34, 211, 238, 1)' },
				},
				'electric-dash': {
					'0%': { strokeDashoffset: '1000' },
					'100%': { strokeDashoffset: '0' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				scan: {
					'0%, 100%': { transform: 'translateY(0vh)' },
					'50%': { transform: 'translateY(100vh)' },
				},
			},
			backgroundSize: {
				'300%': '300% 300%',
				'400%': '400% 400%',
			}
		},
	},
	plugins: [],
}
