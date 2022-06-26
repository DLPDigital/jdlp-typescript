import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleAnalytics, usePagesViews } from "nextjs-google-analytics"

function MyApp({ Component, pageProps }: AppProps) {
  usePagesViews()
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
