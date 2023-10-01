import Head from 'next/head'
import ProjectsLayout from '../../../layouts/ProjectsLayout'
import { keywords, PageNpmDesc, PageNpmTitle } from '../../../constants'

const Npm = () => {
  return (
    <ProjectsLayout>
      <Head>
        <title>{PageNpmTitle}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={PageNpmDesc} />
      </Head>
      <div>Npm</div>
    </ProjectsLayout>
  )
}

export default Npm
