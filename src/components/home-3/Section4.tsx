import BazarIconButton from '@component/BazarIconButton'
import ProductCard11 from '@component/product-cards/ProductCard11'
import { Box, Grid } from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBack'
import ArrowForward from '@material-ui/icons/ArrowForward'
import Link from 'next/link'
import React, { useState } from 'react'
import Carousel from '../carousel/Carousel'
import CategorySectionCreator from '../CategorySectionCreator'

const Section4: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = productList.length / 4

  const firstIndex = currentSlide * 4
  const lastIndex = firstIndex + 4

  const handleSlideChange = (count: number) => () => {
    if (count < 0) {
      setCurrentSlide(0)
    } else if (count > totalSlides - 1) {
      setCurrentSlide(totalSlides - 1)
    } else {
      setCurrentSlide(count)
    }
  }

  // custom arrow button for carousel
  const buttonStyled = (color1: string, color2: string) => ({
    backgroundColor: color1,
    boxShadow: 3,
    '&:hover': {
      backgroundColor: color1,
      color: color2,
    },
  })

  return (
    <CategorySectionCreator title="Deal Of The Week">
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: -55, right: 0 }}>
          <BazarIconButton
            onClick={handleSlideChange(currentSlide - 1)}
            disableRipple
            mr="0.5rem"
            sx={buttonStyled('white', 'primary.500')}
          >
            <ArrowBack fontSize="small" color="secondary" />
          </BazarIconButton>

          <BazarIconButton
            onClick={handleSlideChange(currentSlide + 1)}
            disableRipple
            sx={{ ...buttonStyled('primary.500', 'white'), color: 'white' }}
          >
            <ArrowForward fontSize="small" color="inherit" />
          </BazarIconButton>
        </Box>
      </Box>

      <Box mt={-0.5} mb={-0.5}>
        <Carousel
          totalSlides={totalSlides}
          visibleSlides={1}
          showArrow={false}
          showDots
          currentSlide={currentSlide}
        >
          {[...new Array(totalSlides)].map((_item, ind) => (
            <Box py="0.25rem" key={ind}>
              <Grid container spacing={4}>
                {productList.slice(firstIndex, lastIndex).map((item, ind) => (
                  <Grid item md={6} xs={12} key={ind}>
                    <Link href="/">
                      <a>
                        <ProductCard11
                          imgUrl={item.imgUrl}
                          title={item.brand}
                          off={item.off}
                        />
                      </a>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  )
}

const productList = [
  {
    imgUrl: '/assets/images/products/sunglass.png',
    brand: 'Say Ban Sunglass',
    off: 50,
  },
  {
    imgUrl: '/assets/images/products/nike.png',
    brand: 'Yike Shoe Air Max',
    off: 30,
  },
  {
    imgUrl: '/assets/images/products/apple-watch.png',
    brand: 'Air Jordan',
    off: 40,
  },
  {
    imgUrl: '/assets/images/products/perfume.png',
    brand: 'Perfume',
    off: 20,
  },
  {
    imgUrl: '/assets/images/products/sunglass.png',
    brand: 'Say Ban Sunglass',
    off: 50,
  },
  {
    imgUrl: '/assets/images/products/nike.png',
    brand: 'Yike Shoe Air Max',
    off: 30,
  },
  {
    imgUrl: '/assets/images/products/apple-watch.png',
    brand: 'Air Jordan',
    off: 40,
  },
  {
    imgUrl: '/assets/images/products/perfume.png',
    brand: 'Perfume',
    off: 20,
  },
]

export default Section4
