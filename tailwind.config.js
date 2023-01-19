module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  theme: { 
    extend: {
      fontSize:{
        'xxs': ['0.625rem', {
        lineHeight: '0.75rem',
      }],
      '3xl': ['2rem', {
        lineHeight: '2.75rem',
      }],

      'prose-xl': ['1.8rem', {
        lineHeight: '2.4rem',
      }],
      },
      backgroundImage: {
        'bgTop': "url('../img/top-image.svg')",
      },
      fontFamily:{
        hind: ['Hind'],
        notojp: ['Noto Sans JP'],
      },
      colors: {
        theme: {
          1000: '#FB5C35',
          100: '#FFF2E3',
        }
      },
  } },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
