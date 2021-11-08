// import Footer from '@component/footer/Footer'
import Header from '@component/header/Header'
import MobileNavigationBar from '@component/mobile-navigation/MobileNavigationBar'
import Sticky from '@component/sticky/Sticky'
import Topbar from '@component/topbar/Topbar'
import Head from 'next/head'
import React, { Fragment, useCallback, useState } from 'react'
import Footer from '@component/footer/Footer'

type AppLayoutProps = {
  title?: string
  navbar?: React.ReactChild
}

const AppLayout: React.FC<AppLayoutProps> = ({
                                               children,
                                               navbar,
                                               title = 'La granja urbana',
                                             }) => {
  const [isFixed, setIsFixed] = useState(false)

  const toggleIsFixed = useCallback((fixed) => {
    setIsFixed(fixed)
  }, [])

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Topbar />

      <Sticky fixedOn={0} onSticky={toggleIsFixed}>
        <Header isFixed={isFixed} />
      </Sticky>

      {navbar && <div className='section-after-sticky'>{navbar}</div>}
      {!navbar ? <div className='section-after-sticky'>{children}</div> : children}

      <MobileNavigationBar />
      <Footer />
    </Fragment>
  )
}

export default AppLayout
