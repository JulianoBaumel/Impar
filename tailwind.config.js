module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    fontFamily: {
      'Muli': ['Muli', 'sans-serif']
    },
    fontSize: {
      '12': '.75rem',
      '13': '.813rem',
      'base': '1rem',
      '18': '1.125rem',
      '21': '1.313rem',
      '24': '1.5rem',
      '32': '2rem',
      '52': '3.25rem',
    },
    extend: {
      colors: {
        'primaria': '#5F1478',
        'secundaria': '#AE276F',
        'stroke': '#EDD8F3',
        'bg': '#F9F0FC',
        'branco': '#FFFFFF',
        'aviso': '#FFC400',
        'erro': '#DB2525',
        'sucesso': '#51C421',
        'texto': '#454545',
        'destaque': '#E76316'
      },
      boxShadow: {
        '3xl': '0px 3px 6px #00000029',
      }
    },
    maxWidth: {
      'max-w-8xl': '90rem'
    }
  },
  plugins: [
],
}
