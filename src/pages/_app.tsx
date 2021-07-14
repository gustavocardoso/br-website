import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global.styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Big Room Creative</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Mulish:wght@400;700&display=swap'
          rel='stylesheet'
        ></link>
        <script src='/js/test.js' defer></script>
      </Head>
      <GlobalStyles />
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default App
