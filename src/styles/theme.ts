import hexToRGBA from '../utils/hexToRGBA'

export default {
  colors: {
    // white
    alto: '#dbdbdb',
    caribeanGreen: '#00ce7c',
    codGray: '#111',
    gallery: '#ededed',
    shark: '#212529',
    //grey
    tundora: '#424242',
    white: '#fff'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    base:
      "Mulish, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    special:
      "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
  },
  transitions: {
    basic: 'color 0.3s ease'
  },
  utils: {
    hexToRGBA
  }
}
