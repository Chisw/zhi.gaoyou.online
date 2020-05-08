const base = {
  '8': '2rem',
  '12': '3rem',
  '16': '4rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
}

const extra = {
  '72': '18rem',
  '80': '20rem',
  '88': '22rem',
  '96': '24rem',
  '104': '26rem',
  '112': '28rem',
  '120': '30rem',
  '128': '32rem',
  '136': '34rem',
  '144': '36rem',
  '152': '38rem',
  '160': '40rem',
}

const percent = {
  '1/2': '50%',
  '1/3': '33.33%',
  '2/3': '66.66%',
  '1/4': '25%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
}

module.exports = {
  purge: false,
  theme: {
    extend: {
      inset: Object.assign({

      }, percent),
      spacing: Object.assign({
        '260px': '260px',
        '600px': '600px',
      }, base, extra),
      width: Object.assign({
        '1320px': '1320px',
      }, extra, percent),
      height: Object.assign({
        '100vh': '100vh',
      }, extra, percent),
      minWidth: Object.assign({

      }, base, extra, percent),
      minHeight: Object.assign({

      }, base, extra, percent),
      maxWidth: Object.assign({

      }, base, extra, percent),
      maxHeight: Object.assign({
        'half-view': '50vh',
      }, base, extra, percent),
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      backgroundColor: {
        'black-10': 'rgba(0,0,0, 0.01)',
        'black-20': 'rgba(0,0,0, 0.02)',
        'black-30': 'rgba(0,0,0, 0.03)',
        'black-40': 'rgba(0,0,0, 0.04)',
        'black-50': 'rgba(0,0,0, 0.05)',
        'white-100': 'rgba(255,255,255, 0.1)',
        'white-200': 'rgba(255,255,255, 0.2)',
        'white-300': 'rgba(255,255,255, 0.3)',
        'white-400': 'rgba(255,255,255, 0.4)',
        'white-500': 'rgba(255,255,255, 0.5)',
        'white-600': 'rgba(255,255,255, 0.6)',
        'white-700': 'rgba(255,255,255, 0.7)',
        'white-800': 'rgba(255,255,255, 0.8)',
        'white-900': 'rgba(255,255,255, 0.9)',
      },
    },
  },
  variants: {
    backgroundColor: ['hover', 'active'],
  },
  plugins: [],
}
