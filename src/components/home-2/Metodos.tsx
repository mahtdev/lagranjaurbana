// import AppStore from '@component/AppStore'
import BazarCard from '@component/BazarCard'
import Carousel from '@component/carousel/Carousel'
import FlexBox from '@component/FlexBox'
import LazyImage from '@component/LazyImage'
// import { H1, H5, H6 } from '@component/Typography'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { MuiThemeProps } from '@theme/theme'
import React from 'react'

const useStyles = makeStyles(({ breakpoints }: MuiThemeProps) => ({
  root: {
    borderRadius: 8,
    overflow: 'hidden',

    '& .card__inner-box': {
      padding: '40px 0px 97px 72px',
    },

    '& .carousel-dot': {
      position: 'absolute',
      bottom: '40px',
      left: '72px',
    },

    [breakpoints.down('sm')]: {
      '& .card__inner-box': {
        padding: '1rem 1rem 4rem',
      },

      '& .carousel-dot': {
        position: 'absolute',
        bottom: '0.75rem',
        left: '1rem',
      },
    },
  },
}))

const Slides = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Carousel
        totalSlides={2}
        visibleSlides={1}
        showDots={true}
        showArrow={true}
        autoPlay={true}
        dotClass='carousel-dot'
        dotColor='white'
        spacing='0px'

      >
        <BazarCard
          sx={{
            bgcolor: 'grey.400',
            borderRadius: 0,
            position: 'relative',
          }}
        >
          <FlexBox alignItems='center' flexWrap='wrap'>
            <Box flex='1 1 0' minWidth='368px' height='303px' position='relative'>
              <LazyImage
                src='/assets/images/banners/1_1.png'
                layout='fill'
                objectFit='contain'
              />
            </Box>
          </FlexBox>
        </BazarCard>
        <BazarCard
          sx={{
            bgcolor: 'grey.400',
            borderRadius: 0,
            position: 'relative',
          }}
        >
          <FlexBox alignItems='center' flexWrap='wrap'>
            <Box flex='1 1 0' minWidth='368px' height='303px' position='relative'>
              <LazyImage
                src='/assets/images/banners/2_1.png'
                layout='fill'
                objectFit='contain'
              />
            </Box>
          </FlexBox>
        </BazarCard>
      </Carousel>
    </Box>
  )
}

export default Slides
