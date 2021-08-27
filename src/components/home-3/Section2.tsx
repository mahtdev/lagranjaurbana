import Light from '@component/icons/Light'
import ProductCard3 from '@component/product-cards/ProductCard3'
import useWindowSize from '@hook/useWindowSize'
import { Box } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Carousel from '../carousel/Carousel'
import CategorySectionCreator from '../CategorySectionCreator'

const Section2 = () => {
  const [visibleSlides, setVisibleSlides] = useState(4)
  const width = useWindowSize()

  useEffect(() => {
    if (width < 500) setVisibleSlides(1)
    else if (width < 650) setVisibleSlides(2)
    else if (width < 950) setVisibleSlides(3)
    else setVisibleSlides(4)
  }, [width])

  const arrowButtonStyle = { backgroundColor: 'white', color: '#2B3445' }

  return (
    <CategorySectionCreator icon={<Light color="primary" />} title="Flash Deals">
      <Box mt={-0.5} mb={-0.5}>
        <Carousel
          totalSlides={productList.length}
          visibleSlides={visibleSlides}
          infinite={true}
          leftButtonStyle={arrowButtonStyle}
          rightButtonStyle={arrowButtonStyle}
        >
          {productList.map((item, ind) => (
            <Box py={0.5} key={ind}>
              <ProductCard3
                id={ind}
                imgUrl={item.imgUrl}
                title="ASUS ROG Strix G15"
                rating={4}
                price={250}
                off={56}
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
    imgUrl: '/assets/images/products/chair-and-clothes.png',
  },
  {
    imgUrl: '/assets/images/products/t-shirt3.png',
  },
  {
    imgUrl: '/assets/images/products/t-shirt4.png',
  },
  {
    imgUrl: '/assets/images/products/t-shirt5.png',
  },
  {
    imgUrl: '/assets/images/products/chair-and-clothes.png',
  },
  {
    imgUrl: '/assets/images/products/t-shirt4.png',
  },
  {
    imgUrl: '/assets/images/products/t-shirt3.png',
  },
  {
    imgUrl: '/assets/images/products/t-shirt5.png',
  },
  {
    imgUrl: '/assets/images/products/chair-and-clothes.png',
  },
  {
    imgUrl: '/assets/images/products/t-shirt3.png',
  },
]

export default Section2
