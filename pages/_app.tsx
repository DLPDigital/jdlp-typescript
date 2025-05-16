import Script from 'next/script'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <html lang="en">
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
      <Script
          src="https://scripts.withcabin.com/hello.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
      <Component {...pageProps} />
      </body>
    </html>
  )
}

export default MyApp
