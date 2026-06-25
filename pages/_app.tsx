import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  // Register a simple service worker for offline caching (simple, replace with next-pwa for prod)
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {})
    })
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#071029" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
