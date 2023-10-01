import { AppProps } from '../utils/types'
import '../styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
