import Head from 'next/head'
import ProjectsLayout from '../../../layouts/ProjectsLayout'
import { keywords, PagePetsDesc, PagePetsTitle } from '../../../constants'

const Pets = () => {
  return (
    <ProjectsLayout>
      <Head>
        <title>{PagePetsTitle}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={PagePetsDesc} />
      </Head>
      <div>Pets</div>
    </ProjectsLayout>
  )
}

export default Pets
