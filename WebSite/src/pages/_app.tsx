import { GlobalStyle } from '../styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
