/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		container: {
  			padding: '20px',
  			center: true,
  			screens: {
  				sm: '640px',
  				md: '768px',
  				lg: '1024px',
  				xl: '1280px',
  				'custom-xl': '1170px',
  				'custom-2xl': '1350px',
  				'2xl': '1850px'
  			}
  		},
  		fontFamily: {
  			cambria: [
  				'Cambria'
  			]
  		},
  		colors: {
  			'theme-color': '#99D3FF',
  			'heading-color': '#1B1812',
  			'para-color': '#4F4D49'
  		},
  		screens: {
  			'custom-xs': {
  				min: '360px',
  				max: '479px'
  			},
  			'custom-sm': {
  				min: '480px',
  				max: '575px'
  			},
  			'custom-md': {
  				min: '576px',
  				max: '768px'
  			},
  			'custom-2xl': {
  				min: '1366px',
  				max: '1600px'
  			},
  			'custom-xl': {
  				min: '1200px',
  				max: '1365px'
  			},
  			'custom-lg': {
  				min: '992px',
  				max: '1199px'
  			},
  			'max-md': {
  				max: '991px'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [],
}

