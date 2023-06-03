import '@/styles/globals.css'
import '@/styles/style.css'
import '@/styles/bootstrap.css'
import '@/styles/bootstrap-icon.css'
import '@/styles/erorr.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
