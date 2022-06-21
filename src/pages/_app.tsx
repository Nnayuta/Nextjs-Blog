import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'
import { AuthProvider } from '../contexts/AuthContext'
import { GlobalStyle } from '../styles/globalStyle'
import { theme } from '../styles/theme'
import axios from '../services/axios'

export default function App({ Component, pageProps }) {

  return (
    <>
      <SWRConfig
        value={
          {
            fetcher: (url: string) => axios(url).then((res) => res.data),
            dedupingInterval: 600000
          }}>
        <AuthProvider>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </AuthProvider>
      </SWRConfig>
    </>
  )
}
