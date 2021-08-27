import ProductCard3 from '@component/product-cards/ProductCard3'
import useWindowSize from '@hook/useWindowSize'
import { Box } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Carousel from '../carousel/Carousel'
import CategorySectionCreator from '../CategorySectionCreator'

const Section3 = () => {
  const [visibleSlides, setVisibleSlides] = useState(6)
  const width = useWindowSize()

  useEffect(() => {
    if (width < 500) setVisibleSlides(1)
    else if (width < 650) setVisibleSlides(2)
    else if (width < 950) setVisibleSlides(4)
    else setVisibleSlides(6)
  }, [width])

  const arrowButtonStyle = { backgroundColor: 'white', color: '#2B3445' }

  return (
    <CategorySectionCreator title="New Arrivals" seeMoreLink="#">
      <Box mt="2rem" mb={-0.5}>
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
                title={item.name}
                rating={4}
                price={150}
                off={0}
                hideReview
                hideFavoriteIcon
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
    imgUrl: '/assets/images/products/sunglass.png',
    name: 'Sunglass',
  },
  {
    imgUrl: '/assets/images/products/makeup.png',
    name: 'Makeup',
  },
  {
    imgUrl: '/assets/images/products/smartwatch.png',
    name: 'Smart watch',
  },
  {
    imgUrl: '/assets/images/products/lipsticks.png',
    name: 'Lipstick',
  },
  {
    imgUrl: '/assets/images/products/green-plant.png',
    name: 'Green plant',
  },
  {
    imgUrl: '/assets/images/products/bonsai-tree.png',
    name: 'Bonsai tree',
  },
  {
    imgUrl: '/assets/images/products/makeup.png',
    name: 'Makeup',
  },
  {
    imgUrl: '/assets/images/products/lipsticks.png',
    name: 'Lipstick',
  },
]

export default Section3
