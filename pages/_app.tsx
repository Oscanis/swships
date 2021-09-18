import '../styles/globals.css'
import MainView from '../views/MainView'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainView>
      <Component {...pageProps} />
    </MainView>
  )
}
export default MyApp
