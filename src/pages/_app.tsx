import React from 'react'
import type { AppProps } from 'next/app';
import "../app/styles/main.scss"
import Script from 'next/script';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script src="https://kit.fontawesome.com/19e29e9b0c.js" crossOrigin="anonymous" async></Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp