import React from 'react'
import Header from '../../features/Header'
import SEO from '../Seo'

interface Props {
  children: React.ReactNode
  title?: string
  description?: string
}

const Layout: React.FunctionComponent<Props> = ({ children, title, description }) => {
  return (
    <>
      <SEO title={title} description={description} />
      <Header title="LOGO" />
      {children}
    </>
  )
}

export default Layout
