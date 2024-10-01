/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    // darkMode: ['selector', '[data-mode="dark"]'],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
                shakespeare: {
                    DEFAULT: '#18b0dd',
                    50: '#edfcfe',
                    100: '#d3f4fa',
                    200: '#abe8f6',
                    300: '#72d6ee',
                    400: '#31badf',
                    500: '#18b0dd',
                    600: '#157da5',
                    700: '#186586',
                    800: '#1c536e',
                    900: '#1c465d',
                    950: '#0c2d40',
                    bg: '#0F1B28',
                },
            },
            backgroundImage: {
                'hero-pattern': "url('/Hero-Image.jpg')",
            },
        },
    },
    plugins: [require('tailwindcss-react-aria-components')],
};
