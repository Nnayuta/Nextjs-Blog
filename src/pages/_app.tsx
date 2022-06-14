import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '../contexts/AuthContext'
import { GlobalStyle } from '../styles/globalStyle'
import { theme } from '../styles/theme'

export default function App({ Component, pageProps }) {

  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}
