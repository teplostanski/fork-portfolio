import Image from 'next/image'
import data from '../../data.json'
import linkArrow from '../../assets/images/link_arrow_1.svg'
import { convertEmailLink } from '../../utils/convertLinks'
import styles from './Links.module.scss'

const Links = () => {
  const isEmailLink = (key: string, value: string) => {
    if (key === 'email') {
      return convertEmailLink(value)
    } else {
      return `https://${value}`
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.links__wrapper}>
        {Object.entries(data.links).map(([key, value], i) => (
          <div key={i} className={styles.links__container}>
            <a
              className={styles.links}
              href={isEmailLink(key, value)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.links__body}>
                {key}
                <Image
                  className={styles.links__body_arrow}
                  src={linkArrow}
                  alt="arrow"
                />
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Links
