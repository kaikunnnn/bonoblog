module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {
    colors: {
      theme: {
        1000: '#FB5C35',
        100: '#FFF2E3',
      }
    }
  } },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
