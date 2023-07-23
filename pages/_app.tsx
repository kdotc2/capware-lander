import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <div className="overflow-scroll">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
