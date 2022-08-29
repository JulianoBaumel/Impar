module.exports = {
  content: ['.{html}','./src/**/*.{js,jsx,ts,tsx}','./src/assets/*.{svg}'],
  theme: {
    screens: {
      'xs': '390px', // => @media (min-width: 390px)
      'sm': '640px', // => @media (min-width: 640px)
      'md': '768px', // => @media (min-width: 768px)
      'lg': '1024px', // => @media (min-width: 1024px)
      'xl': '1280px', // => @media (min-width: 1280px)
      '2xl': '1440px',// => @media (min-width: 1440px)
    },
    maxWidth: {
      '2/3': '66.666667%',
    },
    fontFamily: {
      'muli': ['Muli', 'sans-serif'],
    },
    fontSize: {
      '12': '.75rem',
      '13': '.813rem',
      '18': '1.125rem',
      '21': '1.313rem',
      '24': '1.5rem',
      '32': '2rem',
      '52': '3.25rem'
    },
    extend: {
      backgroundImage: {
        'busca': "url('./src/assets/fundo-busca@2x.png')",
      },
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
        'destaque': '#E76316',

        'primaria-text': '#757575',
        'secundaria-text': '#263238',

        'card-elipse': '#F6F6F6',
        'card-border': '#E4E4E4',
        'card-line-x': '#F0EFF0',
        'card-line-y': '#F6F4F6',

        'modal-elipse-border': '#E4E4E4',
        'modal-elipse': '#DB25250F',

        'sidebar-bg':'#F6F4F6CC',
        
        '000000': '#000000',
        'a02724': '#A02724',
        'b55b52': '#B55B52',
        'c64049': '#C64049',
        'e6e6e6': '#E6E6E6',
        'e0e0e0': '#E0E0E0',
        'f5f5f5': '#F5F5F5',
        'f0f0f0': '#F0F0F0',
        'ebebeb': '#EBEBEB',
        '6c63ff': '#6C63FF'
      },
      boxShadow: {
        'navbar-shadow': '0px 3px 6px #00000029',
        'card-shadow': '0px 3px 6px #E5E5E5;',
        'card-shadow-inner': 'inset 0px 3px 6px #0000000F',
        'close-modal-x': '0px 3px 6px #E7631636',
        'button' : '0px 3px 6px #92207242'
      },
      width: {
        '1040': '65rem'
      },
      maxWidth: {
        'max-w-xxs': '19rem',
        'max-w-8xl': '90rem'
      },
      spacing:{
        '25px': '1.563',
        '13px': '0.813'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

