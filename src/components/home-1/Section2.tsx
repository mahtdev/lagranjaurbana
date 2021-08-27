import Light from '@component/icons/Light'
import useWindowSize from '@hook/useWindowSize'
import { Box } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Carousel from '../carousel/Carousel'
import CategorySectionCreator from '../CategorySectionCreator'
import ProductCard1 from '../product-cards/ProductCard1'

const Section2 = () => {
  const [visibleSlides, setVisibleSlides] = useState(4)
  const width = useWindowSize()

  useEffect(() => {
    if (width < 500) setVisibleSlides(1)
    else if (width < 650) setVisibleSlides(2)
    else if (width < 950) setVisibleSlides(3)
    else setVisibleSlides(4)
  }, [width])

  return (
    <CategorySectionCreator
      icon={<Light color="primary" />}
      title="Flash Deals"
      seeMoreLink="#"
    >
      <Box mt={-0.5} mb={-0.5}>
        <Carousel
          totalSlides={productList.length}
          visibleSlides={visibleSlides}
          infinite={true}
        >
          {productList.map((item, ind) => (
            <Box py={0.5} key={ind}>
              <ProductCard1
                id={ind}
                imgUrl={item.imgUrl}
                title="Smart watch black"
                rating={4}
                price={250}
                off={20}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  )
}

const productList = [
  {
    imgUrl: '/assets/images/products/flash-1.png',
  },
  {
    imgUrl: '/assets/images/products/flash-2.png',
  },
  {
    imgUrl: '/assets/images/products/flash-3.png',
  },
  {
    imgUrl: '/assets/images/products/flash-4.png',
  },
  {
    imgUrl: '/assets/images/products/flash-1.png',
  },
  {
    imgUrl: '/assets/images/products/flash-2.png',
  },
  {
    imgUrl: '/assets/images/products/flash-3.png',
  },
  {
    imgUrl: '/assets/images/products/flash-4.png',
  },
  {
    imgUrl: '/assets/images/products/flash-1.png',
  },
  {
    imgUrl: '/assets/images/products/flash-2.png',
  },
]

export default Section2
