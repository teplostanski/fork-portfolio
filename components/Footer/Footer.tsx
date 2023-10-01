import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <span>creator Igor Teplostanski</span> <span>&copy; 2022-2023</span>
      </div>
    </footer>
  )
}

export default Footer
