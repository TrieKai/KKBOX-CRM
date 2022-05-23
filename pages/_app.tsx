import { useMemo, useState } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext } from 'contexts/colorModeContext'
import { DARK, LIGHT } from 'assets/constant'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [mode, setMode] = useState<'light' | 'dark'>(DARK)
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === LIGHT ? DARK : LIGHT))
      }
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Head>
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta
              name='viewport'
              content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
            />
            <title>KKBOX-CRM</title>
            <meta name='description' content='KKBOX' />
            <meta name='keywords' content='KKBOX CRM Youtube' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content='KKBOX-CRM' />
            <meta
              property='og:description'
              content='KKBOX-CRM with Youtube API'
            />
            <meta property='twitter:card' content='summary' />
            <meta property='twitter:title' content='KKBOX-CRM' />
            <meta
              property='twitter:description'
              content='KKBOX-CRM with Youtube API'
            />
          </Head>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default MyApp
