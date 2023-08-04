module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			backgroundColor: {
				'blue-light': '#C3DCFF',
				'blue-medium': '#94BEF9',
				'purple-border': 'rgba(222, 91, 255, 0.50)',
				'blue-superlight': '#E5EFFD',
				'purple-bg': '#DE5BFF'
			}
		}
	},
	plugins: []
}
