const colors = {
  darkerPrimary: '#044E54',
  darkPrimary: '#0E7C86',
  primary: 'var(--color-primary)',
  lightPrimary: '#54D1DB',
  lighterPrimary: '#BEF8FD',
  tertiary: 'rgb(255, 195, 18)',

  transparent: 'transparent',
  black: 'var(--color-black)',
  lightBlack: 'var(--color-light-black)',
  lighterBlack: '#515151',
  lightestBlack: '#6f6f6f',

  darkerGrey: '#aaaaaa',
  darkGrey: '#b5b5b5',
  grey: '#bdbdbd',
  lightGrey: '#c9c9c9',
  lighterGrey: '#d1d1d1',
  lightestGrey: '#dcdcdc',

  darkestWhite: '#e1e1e1',
  darkerWhite: '#ebebeb',
  darkWhite: '#f5f5f5',
  white: '#ffffff',
}

const theme = {
  appBackground: colors.white,
  breakpoints: {
    mobileMax: '767px',
    tabletMin: '768px',
    tabletMax: '1024px',
    desktopMin: '1025px',
  },
  colors: colors,
  components: {
    header1: {
      color: colors.lightBlack,
    },
    header2: {
      color: colors.lightBlack,
      lineHeight: '1.1em',
    },
    header3: {
      color: colors.lightBlack,
    },
    header4: {
      color: colors.lightBlack,
    },
    header5: {
      color: colors.lightBlack,
    },
    link: {
      color: colors.primary,
      colorVisited: '#8b12e6',
    },
    text: {
      color: colors.black,
      fontSize: '16px',
      lineHeight: '1.5em',
    }
  },
  fontFamily: {
    primary: 'Roboto',
    secondary: 'Inconsolata, Monaco, consolas, "courrier new"',
  },
  shareBackground: '#e5edf6',
  spaces: {
    s0_25: '4px',
    s0_5: '8px',
    s0_75: '12px',
    s1: '16px',
    s1_5: '24px',
    s2: '32px',
    s3: '48px',
    s4: '64px',
    s6: '96px',
    s8: '128px',
    s12: '192px',
    s16: '256px',
    s24: '384px',
    s32: '512px',
    s40: '640px',
    s48: '768px',

    quarter: '25%',
    halt: '50%',
    threeQuarter: '75%',
    full: '100%',
  },
  travelBlogPostWidth: '70%',
  webBlogPost: {
    basicWidth: '50%',
    extendedWidth: '70%',
  },
}

export default theme
