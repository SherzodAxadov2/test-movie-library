module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ["light"],
    },
}
