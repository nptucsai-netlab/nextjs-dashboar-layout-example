module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {
      content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
      ],
      theme: {},
      plugins: [require('daisyui')],
      daisyui: {
        themes: [
          'light',
          'dark',
          'cupcake',
          'bumblebee',
          'emerald',
          'corporate',
          'synthwave',
          'retro',
          'cyberpunk',
          'valentine',
          'halloween',
          'garden',
          'forest',
          'aqua',
          'lofi',
          'pastel',
          'fantasy',
          'wireframe',
          'black',
          'luxury',
          'dracula',
          'cmyk',
          'autumn',
          'business',
          'acid',
          'lemonade',
          'night',
          'coffee',
          'winter',
          'dim',
          'nord',
          'sunset'
        ]
      }
    },
    autoprefixer: {}
  }
};
