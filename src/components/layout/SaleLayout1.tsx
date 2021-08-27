import Footer from '@component/footer/Footer'
import Header from '@component/header/Header'
import MobileNavigationBar from '@component/mobile-navigation/MobileNavigationBar'
import Navbar from '@component/navbar/Navbar'
import Topbar from '@component/topbar/Topbar'
import Head from 'next/head'
import React, { Fragment } from 'react'

type Props = {
  title?: string
}

const SaleLayout1: React.FC<Props> = ({
  children,
  title = 'Multivendor Ecommerce | Sale',
}) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Topbar />

    <Header />

    <Navbar />

    {children}

    <MobileNavigationBar />

    <Footer />
  </Fragment>
)

export default SaleLayout1
