import CarouselCard3 from '@component/carousel-cards/CarouselCard3'
import Carousel from '@component/carousel/Carousel'
import CategorySectionCreator from '@component/CategorySectionCreator'
import Navbar from '@component/navbar/Navbar'
import { Container, Grid } from '@material-ui/core'
import { Box } from '@material-ui/system'
import React, { FC, Fragment } from 'react'
import CarouselSection from './CarouselSection'
import HomeFourCard1 from './homeFour-cards/HomeFourCard1'

const Section1: FC = () => {
  const arrowButtonStyle = {
    boxShadow: 'none',
    background: 'transparent',
    color: '#7D879C',
  }
  return (
    <Fragment>
      <Navbar />
      <Container sx={{ pt: '3rem' }}>
        <Grid container spacing={5}>
          <Grid item md={5} xs={12}>
            <Carousel
              totalSlides={5}
              visibleSlides={1}
              leftButtonStyle={{ ...arrowButtonStyle, left: 8 }}
              rightButtonStyle={{ ...arrowButtonStyle, right: 8 }}
            >
              {[...new Array(5)].map((_item, ind) => (
                <CarouselCard3 key={ind} />
              ))}
            </Carousel>
          </Grid>
          <Grid item md={7} xs={12}>
            <CategorySectionCreator title="Top Picks">
              <CarouselSection productList={productList} />

              <Box my="3rem">
                <HomeFourCard1
                  title="Converse Collecitons"
                  body="Get the most exciting deals. Starting at $59"
                  imgUrl="/assets/images/products/red-shoe.png"
                />
              </Box>

              <CarouselSection productList={productList} />
            </CategorySectionCreator>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  )
}

const productList = [
  {
    name: 'Bluetooth Speaker',
    imgUrl: '/assets/images/products/bluetooth-headphone.png',
  },
  {
    name: 'Titan Watch',
    imgUrl: '/assets/images/products/watch-2.png',
  },
  {
    name: 'N95 White Mask',
    imgUrl: '/assets/images/products/mask.png',
  },
  {
    name: 'Formal Shoe',
    imgUrl: '/assets/images/products/shoe.png',
  },
  {
    name: 'Bluetooth Speaker',
    imgUrl: '/assets/images/products/watch-2.png',
  },
  {
    name: 'Bluetooth Speaker',
    imgUrl: '/assets/images/products/bluetooth-headphone.png',
  },
]

export default Section1
