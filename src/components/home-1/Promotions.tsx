import Navbar from '@component/navbar/Navbar'
import { Box, Container } from '@material-ui/core'
import React, { Fragment } from 'react'
import GrocerySection2 from '@component/home-2/GrocerySection2'
import Slides from '@component/home-2/Slides'

const Promotions = () => {
  return (
    <Fragment>
      <Navbar />
      <Box bgcolor='gray.100'>
        <Container sx={{ py: '2rem' }}>
          {/*<Carousel*/}
          {/*  totalSlides={2}*/}
          {/*  visibleSlides={1}*/}
          {/*  infinite={true}*/}
          {/*  autoPlay={false}*/}
          {/*  showDots={true}*/}
          {/*  showArrow={false}*/}
          {/*  spacing="0px"*/}
          {/*>*/}
          {/*  <CarouselCard1 />*/}
          {/*  <CarouselCard1 />*/}
          {/* <CarouselCard1 /> */}
          {/* <CarouselCard1 /> */}
          {/* <CarouselCard1 /> */}
          {/*</Carousel>*/}
          <Box mb={6} mt={3}>
            <Slides />
          </Box>
          <Box overflow="hidden">
            <GrocerySection2 />
          </Box>
        </Container>
      </Box>
    </Fragment>
  )
}

export default Promotions
