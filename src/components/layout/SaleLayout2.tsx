import Footer from '@component/footer/Footer'
import Header from '@component/header/Header'
import BabyFeeder from '@component/icons/BabyFeeder'
import BasketBall from '@component/icons/BasketBall'
import BeautyProducts from '@component/icons/BeautyProducts'
import Camera from '@component/icons/Camera'
import DrillMachine from '@component/icons/DrillMachine'
import Picture from '@component/icons/Picture'
import Sofa from '@component/icons/Sofa'
import Tshirt from '@component/icons/Tshirt'
import Watch from '@component/icons/Watch'
import Wheel from '@component/icons/Wheel'
import WomenDress from '@component/icons/WomenDress'
import MobileNavigationBar from '@component/mobile-navigation/MobileNavigationBar'
import SaleNavbar from '@component/navbar/SaleNavbar'
import Sticky from '@component/sticky/Sticky'
import Topbar from '@component/topbar/Topbar'
import { Divider } from '@material-ui/core'
import Head from 'next/head'
import React, { Fragment } from 'react'

type Props = {
  title?: string
}

const SaleLayout2: React.FC<Props> = ({
  children,
  title = 'Multivendor Ecommerce | Sale',
}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Topbar />
      <Header />
      <Divider />
      <Sticky fixedOn={0}>
        <SaleNavbar saleCategoryList={saleCategoryList} />
      </Sticky>
      <div className="section-after-sticky">{children}</div>
      <MobileNavigationBar />
      <Footer />
    </Fragment>
  )
}

const saleCategoryList = [
  {
    icon: Tshirt,
    title: 'Men',
  },
  {
    icon: WomenDress,
    title: 'Women',
  },
  {
    icon: BeautyProducts,
    title: 'Cosmetics',
  },
  {
    icon: Watch,
    title: 'Accessories',
  },
  {
    icon: Camera,
    title: 'Eelctronics',
  },
  {
    icon: Sofa,
    title: 'Furniture',
  },
  {
    icon: BasketBall,
    title: 'Sport',
  },
  {
    icon: Wheel,
    title: 'Automobile',
  },
  {
    icon: DrillMachine,
    title: 'Hardware',
  },
  {
    icon: BabyFeeder,
    title: 'Baby products',
  },
  {
    icon: Picture,
    title: 'Photos',
  },
  {
    icon: Tshirt,
    title: 'Clothes',
  },
]

export default SaleLayout2
