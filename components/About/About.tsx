import cn from 'classnames'
import styles from './About.module.scss'

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.description}>
        <div className={styles.wrapper}>
          <p className={cn(styles.text, styles.text__with__title)}>
            <span className={styles.title}>about</span>
            Мне всегда нравилось интернет-искусство, особенно net-art. И желание
            создавать нечто похожее привело меня в Веб-разработку. Именно
            поэтому стремлюсь к профессиональному росту и развитию в сфере
            Frontend.
          </p>
          <p className={styles.text}>
            В свободное время люблю кастомить GNU/Linux и изучать терминальные
            утилиты. Готов просидеть не одни сутки, изучая задачу, пока не решу
            ее.
          </p>

          {/*<div className={cn(styles.section, styles.section1)}></div>
      <div className={cn(styles.section, styles.section2)}></div>
      <div className={cn(styles.section, styles.section3)}></div>

      <div className={styles.cube}></div>*/}
        </div>
      </div>
    </section>
  )
}

export default About
