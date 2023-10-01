import MainLayout from './MainLayout'
import { ProjectsLayoutProps } from '../utils/types'
import Footer from '../components/Footer/Footer'

const ProjectsLayout = ({ children }: ProjectsLayoutProps) => {
  return (
    <MainLayout>
      <section>{children}</section>
      <Footer />
    </MainLayout>
  )
}

export default ProjectsLayout
