import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${({ theme }) => css`
    html {
      font: normal normal 100%/1.5 ${theme.font.base};
      color: ${theme.colors.tundora};
    }

    body {
      background-color: ${theme.colors.white};
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    p {
      margin-bottom: 1.5625rem;
    }
  `}
`

export default GlobalStyles
