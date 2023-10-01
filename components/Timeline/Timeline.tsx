import { useEffect, useRef, useState } from 'react'
import { nanoid } from 'nanoid'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useWindowWidth } from '@react-hook/window-size'
import styles from './Timeline.module.scss'

gsap.registerPlugin(ScrollTrigger)

const Timeline = () => {
  //const windowWidth = useWindowWidth()
  //const ref = useRef<HTMLDivElement | null>(null)

  //console.log('cardWidth', cardWidth);
  //console.log('windowWidth', windowWidth);

  const projects = [
    {
      id: nanoid(),
      name: 'Шифровальная машина',
      stack: ['React', 'MobX', 'SCSS'],
      partake: 'Совместный',
      desc: 'Шифровальная машина - это онлайн сервис шифрования текстовых сообщений. Разработан выпускниками Яндекс.Практикума',
      preview:
        'https://github.com/encryption-machine/Front/raw/master/src/assets/images/screenshot.png',
      website: 'http://shifmachine.acceleratorpracticum.ru/',
      source: 'https://github.com/encryption-machine/Front',
    },
    {
      id: nanoid(),
      name: 'TechnoCats Team blog',
      stack: [
        'React',
        'Astro.js',
        'SSR',
        'CSS',
        'HTML',
        'FireBase',
        'CSS',
        'HTML',
        'FireBase',
      ],
      partake: 'Совместный',
      desc: 'Командная работа из 6 человек над созданием сайта блога написанного на Astro',
      preview:
        'https://raw.githubusercontent.com/teplostanski/technocats-team-blog/main/src/assets/screenshot.png',
      website: 'https://technocats-team.teplostanski.dev/',
      source: 'https://github.com/teplostanski/technocats-team-blog',
    },
    {
      id: nanoid(),
      name: 'Movies Explorer',
      stack: ['HTML', 'CSS', 'BEM', 'Adaptive', 'React'],
      partake: 'Соло',
      desc: 'Данное вeб-приложение является сайтом-портфолио и мини-кинопоиском, открывающимся после регистрации.',
      preview:
        'https://raw.githubusercontent.com/teplostanski/movies-explorer-frontend/main/screen.png',
      website: '',
      source: 'https://github.com/teplostanski/movies-explorer-frontend',
    },
    {
      id: nanoid(),
      name: 'Место',
      stack: ['HTML', 'CSS', 'BEM', 'Adaptive', 'React'],
      partake: 'Соло',
      desc: '"Mesto" — это сайт, где люди обмениваются фотографиями. Местом может быть что угодно: город, область или какое-то заведение.',
      preview:
        'https://raw.githubusercontent.com/teplostanski/react-mesto-auth/main/screen.png',
      website: 'https://teplostanski.github.io/react-mesto-auth/',
      source: 'https://github.com/teplostanski/react-mesto-auth',
    },
    {
      id: nanoid(),
      name: 'Путешествие по России',
      stack: ['HTML', 'CSS', 'BEM', 'Adaptive'],
      partake: 'Соло',
      desc: 'Адаптивная веб-страница Путешествия по России, описывающая необыкновенные места России.',
      preview:
        'https://raw.githubusercontent.com/teplostanski/travel/master/screen.png',
      website: 'https://teplostanski.github.io/travel/',
      source: 'https://github.com/teplostanski/travel',
    },
    {
      id: nanoid(),
      name: 'Научиться учиться',
      stack: ['HTML', 'CSS', 'BEM'],
      partake: 'Соло',
      desc: 'Это одноcтраничный сайт о современных и эффективных подходов к обучению.',
      preview:
        'https://raw.githubusercontent.com/teplostanski/how-to-learn/main/screen.png',
      website: 'https://teplostanski.github.io/how-to-learn/index.html',
      source: 'https://github.com/how-to-learn',
    },
  ]

  //const [cardWidth, setCardWidth] = useState<any>(0)

  //useEffect(() => {
  //  setCardWidth(1)
  //}, [cardWidth])
  //const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    //setIsClient(true)

    const sections = gsap.utils.toArray('#panel')
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '#container',
        start: 'top ',
        pin: true,
        invalidateOnRefresh: true,
        //pinReparent: true, // moves to documentElement during pin
        pinSpacing: true,
        anticipatePin: 1,
        //fastScrollEnd: 1, // or velocity number
        //containerAnimation: tween,
        scrub: 1.1,
        //end: () => '+=' + width,
      },
    })
  }, [])

  return (
    <div
      id="container"
      style={{ width: `${projects.length + 2}00vw` }}
      className={styles.container}
    >
      <section id="panel" className={styles.panel}>
        <h1 className={styles.title}>timeline my projects</h1>
      </section>
      {projects &&
        projects.map(
          ({ name, id, preview, partake, stack, desc, source, website }) => (
            <section
              key={id}
              id="panel"
              //style={{ width: getPanelWidth() }}
              //style={{ width: '100vw' }}
              className={styles.panel}
            >
              <fieldset className={styles.timeline}>
                <legend className={styles.timepoint}>22-2-2002</legend>
              </fieldset>
              <div className={styles.card}>
                {/*<h1 className={styles.card__title}>{name}</h1>
              <picture className={styles.picture}>
                <source srcSet={preview} type="image/svg" />
                <img className={styles.image} src={preview} alt={name} />
              </picture>
              <span>{partake}</span>
              <p>{stack}</p>
              <p>{desc}</p>
              <span>{source}</span>
              <span>{website}</span>*/}
                <h2 className={styles.card__title}>{name}</h2>
                {preview && (
                  <picture className={styles.picture}>
                    <source srcSet={preview} type="image/svg" />
                    <img className={styles.image} src={preview} alt={name} />
                  </picture>
                )}

                <span>{partake}</span>
                <div className={styles.stack}>
                  {stack.map((item) => (
                    <span className={styles.stack__item} key={nanoid()}>
                      {item}
                    </span>
                  ))}
                </div>
                <p className={styles.description}>{desc}</p>
                <div className={styles.links}>
                  <span>
                    <a className={styles.link} href={website}>
                      Сайт
                    </a>
                  </span>
                  <span>
                    <a className={styles.link} href={source}>
                      Код
                    </a>
                  </span>
                </div>
              </div>
            </section>
          )
        )}
    </div>
  )
}

export default Timeline
