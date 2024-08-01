/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			transitionTimingFunction: {
				"project-timing": "cubic-bezier(0.53, 0.13, 0.09, 0.99)"
			}
		},
	},
	plugins: [],
}
