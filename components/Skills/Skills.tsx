/* eslint-disable react/jsx-key */
import { nanoid } from 'nanoid'
import data from '../../data.json'
import styles from './Skills.module.scss'

const Skills = () => {
  const skills = data.skills
  const experience = data.experience

  const setTitle = (title: string) => {
    if (title === 'langs') {
      return 'Языки программирования'
    } else if (title === 'frontend') {
      return 'Frontend технологии'
    } else if (title === 'backand') {
      return 'Backend технологии'
    } else if (title === 'db') {
      return 'Базы данных'
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.description}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Навыки</h2>
          {skills.map((item: any) =>
            Object.entries(item).map(([key, values]: any) => (
              <div key={nanoid()} className={styles.block}>
                <h3 className={styles.subtitle}>{setTitle(key)}</h3>
                <div className={styles.items_skills}>
                  {values.map((value: any) => (
                    <div key={nanoid()} className={styles.item}>
                      <picture className={styles.picture}>
                        <source
                          srcSet={`https://cdn.simpleicons.org/${value}/black`}
                          type="image/svg"
                        />
                        <img
                          className={styles.image}
                          src={`https://cdn.simpleicons.org/${value}/black`}
                          alt="Landscape picture"
                        />
                      </picture>
                      <span className={styles.text_skills}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}

          <h2 className={styles.title}>Опыт</h2>
          <div className={styles.block}>
            <h3 className={styles.subtitle}>Обучение</h3>
            <div className={styles.items_experience}>
              {experience.edu.map(
                ({
                  institution,
                  faculty,
                  year,
                }: {
                  institution: any
                  faculty: any
                  year: any
                }) => (
                  <div key={nanoid()}>
                    <p className={styles.text_experience}>{institution}</p>

                    <p className={styles.description}>
                      {faculty} ({year})
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className={styles.block}>
            <h3 className={styles.subtitle}>Стажировки</h3>
            <div className={styles.items_experience}>
              {experience.internships.map(
                ({ company, year }: { company: any; year: any }) => (
                  <div key={nanoid()}>
                    <p className={styles.text_experience}>
                      {company} ({year})
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
