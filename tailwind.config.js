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
				primary: "#3b82f6",
				darkBg: "#0f172a",
				darkCard: "#1e293b",
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
					'0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)', borderColor: 'rgba(59, 130, 246, 0.5)' },
					'100%': { boxShadow: '0 0 10px rgba(96, 165, 250, 0.8), 0 0 40px rgba(96, 165, 250, 0.6)', borderColor: 'rgba(96, 165, 250, 1)' },
				},
				'electric-dash': {
					'0%': { strokeDashoffset: '1000' },
					'100%': { strokeDashoffset: '0' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
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
