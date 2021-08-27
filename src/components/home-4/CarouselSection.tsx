import Carousel from '@component/carousel/Carousel'
import ProductCard3 from '@component/product-cards/ProductCard3'
import useWindowSize from '@hook/useWindowSize'
import { Box } from '@material-ui/core'
import React, { FC, useEffect, useState } from 'react'

interface CarouselProps {
  productList: {
    name: string
    imgUrl: string
  }[]
}

const CarouselSection: FC<CarouselProps> = ({ productList }) => {
  const [visibleSlides, setVisibleSlides] = useState(4)
  const width = useWindowSize()

  useEffect(() => {
    if (width < 500) setVisibleSlides(1)
    else if (width < 650) setVisibleSlides(2)
    else if (width < 1100) setVisibleSlides(3)
    else setVisibleSlides(4)
  }, [width])

  const arrowButtonStyle = { backgroundColor: 'white', color: '#2B3445' }

  return (
    <Box mt={-0.5} mb={-0.5}>
      <Carousel
        totalSlides={productList.length}
        visibleSlides={visibleSlides}
        infinite={true}
        leftButtonStyle={arrowButtonStyle}
        rightButtonStyle={arrowButtonStyle}
      >
        {productList.map((item, ind) => (
          <ProductCard3
            key={ind}
            id={ind}
            imgUrl={item.imgUrl}
            title={item.name}
            rating={5}
            price={1500}
            off={20}
            hideFavoriteIcon
          />
        ))}
      </Carousel>
    </Box>
  )
}

export default CarouselSection
