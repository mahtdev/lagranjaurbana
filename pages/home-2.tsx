import GroceryFooter from '@component/home-2/GroceryFooter'
import GrocerySection1 from '@component/home-2/GrocerySection1'
import GrocerySection2 from '@component/home-2/GrocerySection2'
import GrocerySection3 from '@component/home-2/GrocerySection3'
import GrocerySection4 from '@component/home-2/GrocerySection4'
import GrocerySection5 from '@component/home-2/GrocerySection5'
import GrocerySection6 from '@component/home-2/GrocerySection6'
import GrocerySection7 from '@component/home-2/GrocerySection7'
import GrocerySection8 from '@component/home-2/GrocerySection8'
import GrocerySection9 from '@component/home-2/GrocerySection9'
import GrocerySidenav from '@component/home-2/GrocerySidenav'
import GroceryLayout from '@component/layout/GroceryLayout'
import { Box, Container } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import { layoutConstant } from '@utils/constants'
import { slideDown } from 'animations/keyframes'
import clsx from 'clsx'
import React, { useCallback, useEffect, useState } from 'react'

const StyledContainer = styled(Container)(({ theme }) => ({
  '.sidenav': {
    width: layoutConstant.grocerySidenavWidth,
    minWidth: layoutConstant.grocerySidenavWidth,
    position: 'relative',
    top: 0,
    height: `calc(100vh - ${layoutConstant.headerHeight}px)`,
    bottom: 0,
    transition: 'all 350ms ease-in-out',
    animation: `${slideDown} 400ms ${theme.transitions.easing.easeInOut}`,
  },
  '.fixed': {
    position: 'fixed',
    top: layoutConstant.headerHeight,
  },

  '.pageContent': {
    position: 'relative',
    left: 'unset',
    width: `calc(100% - 2.5rem - ${layoutConstant.grocerySidenavWidth}px)`,
    marginLeft: '1.75rem',
  },

  '.pageContentShifted': {
    left: layoutConstant.grocerySidenavWidth,
  },

  '.section1': {
    marginBottom: '3rem',
    marginTop: '1.75rem',
  },

  '@keyframes slideDown': {
    '0%': {
      opacity: 0,
      transform: 'translateY(0)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },

  [theme.breakpoints.down('md')]: {
    '.sidenav': {
      display: 'none',
    },
    '.pageContent': {
      width: '100% !important',
      marginLeft: 'auto !important',
      marginRight: 'auto !important',
      left: '0px !important',
    },
  },
}))

const Home2 = () => {
  const [isSidenavFixed, setSidenavFixed] = useState(false)

  const scrollListener = useCallback(() => {
    setSidenavFixed(window.pageYOffset > layoutConstant.headerHeight)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  }, [])

  return (
    <GroceryLayout>
      <StyledContainer sx={{ display: 'flex', position: 'relative' }}>
        <Box
          className={clsx({
            sidenav: true,
            fixed: isSidenavFixed,
          })}
        >
          <GrocerySidenav isFixed={isSidenavFixed} />
        </Box>
        <Box
          className={clsx({
            pageContent: true,
            pageContentShifted: isSidenavFixed,
          })}
        >
          <Box mb={6} mt={3}>
            <GrocerySection1 />
          </Box>

          <Box mb={6} overflow="hidden">
            <GrocerySection2 />
          </Box>

          <Box mb={6}>
            <GrocerySection3 />
          </Box>

          <Box mb={6}>
            <GrocerySection4 />
          </Box>

          <Box mb={6}>
            <GrocerySection5 />
          </Box>

          <Box mb={6}>
            <GrocerySection6 />
          </Box>

          <Box mb={6}>
            <GrocerySection7 />
          </Box>

          <Box mb={6}>
            <GrocerySection8 />
          </Box>

          <Box mb={6}>
            <GrocerySection9 />
          </Box>

          <GroceryFooter />
        </Box>
      </StyledContainer>
    </GroceryLayout>
  )
}

export default Home2
