import GroceryHeader from '@component/header/GroceryHeader'
import MobileNavigationBar from '@component/mobile-navigation/MobileNavigationBar'
import Navbar2 from '@component/navbar/Navbar2'
import Sticky from '@component/sticky/Sticky'
import { Box } from '@material-ui/core'
import Head from 'next/head'
import React, { Fragment, useCallback, useState } from 'react'

type Props = {
  title?: string
  navbar?: React.ReactChild
}

const GroceryLayout: React.FC<Props> = ({
  children,
  title = 'React Next.js Ecommerce Template',
}) => {
  const [isFixed, setIsFixed] = useState(false)

  const toggleIsFixed = useCallback((fixed) => {
    setIsFixed(fixed)
  }, [])

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Sticky fixedOn={0} onSticky={toggleIsFixed}>
        <GroceryHeader isFixed={isFixed} />
      </Sticky>

      <Box className="section-after-sticky" position="relative" zIndex={1}>
        <Navbar2 />
      </Box>

      {children}

      <MobileNavigationBar />
    </Fragment>
  )
}

export default GroceryLayout
