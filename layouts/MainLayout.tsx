import Header from '../components/Header/Header'
import { MainLayoutProps } from '../utils/types'
import styles from './MainLayout.module.scss'

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
    </>
  )
}

export default MainLayout
