import Head from 'next/head'
import { keywords, Page404Desc, Page404Title } from '../../constants'

const NotFound = () => {
  return (
    <>
      <Head>
        <title>{Page404Title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={Page404Desc} />
      </Head>
      <div>404</div>
    </>
  )
}

export default NotFound
