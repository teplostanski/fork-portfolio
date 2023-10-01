import Head from 'next/head'
import Image from 'next/image'
import { nanoid } from 'nanoid'
import ProjectsLayout from '../../layouts/ProjectsLayout'
import { keywords, PageProjectsDesc, PageProjectsTitle } from '../../constants'
import data from '../../data.json'
//import img from '../../assets/images/mesto.png'
import styles from './index.module.scss'

const Projects = () => {
  return (
    <ProjectsLayout>
      <Head>
        <title>{PageProjectsTitle}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={PageProjectsDesc} />
      </Head>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Проекты</h1>
        <div className={styles.cards}>
          {data.projects.jobs.map(
            ({ name, preview, desc, website, source, stack }) => (
              <div key={nanoid()} className={styles.card}>
                <picture className={styles.picture}>
                  <source srcSet={preview} type="image/svg" />
                  <img className={styles.image} src={preview} alt={name} />
                </picture>
                <h2 className={styles.name}>{name}</h2>
                <div className={styles.stack}>
                  {stack.map((item) => (
                    <span className={styles.item} key={nanoid()}>
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
            )
          )}
        </div>
        <h1 className={styles.title}>Pet-проекты</h1>
        <div className={styles.cards}>
          {data.projects.pets.map(
            ({ name, preview, desc, website, source, stack }) => (
              <div key={nanoid()} className={styles.card}>
                {preview && (
                  <picture className={styles.picture}>
                    <source srcSet={preview} type="image/svg" />
                    <img className={styles.image} src={preview} alt={name} />
                  </picture>
                )}
                <h2 className={styles.name}>{name}</h2>
                <div className={styles.stack}>
                  {stack.map((item) => (
                    <span className={styles.item} key={nanoid()}>
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
            )
          )}
        </div>
      </div>
    </ProjectsLayout>
  )
}

export default Projects
