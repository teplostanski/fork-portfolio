import { ReactNode } from 'react'

type Children = {
  children: ReactNode
}

type MainLayout = {
  props?: any
}

type ProjectsLayout = {
  props?: any
}

type AppProps = {
  Component: any
  pageProps: any
}

type MainLayoutProps = Children & MainLayout
type ProjectsLayoutProps = Children & ProjectsLayout

export type { MainLayoutProps, ProjectsLayoutProps, AppProps }
