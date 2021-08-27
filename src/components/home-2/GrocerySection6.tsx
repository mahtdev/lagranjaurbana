import BazarCard from '@component/BazarCard'
import Carousel from '@component/carousel/Carousel'
import FlexBox from '@component/FlexBox'
import LazyImage from '@component/LazyImage'
import { H3, H5 } from '@component/Typography'
import { Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { MuiThemeProps } from '@theme/theme'
import Link from 'next/link'
import React from 'react'

const useStyles = makeStyles(({ breakpoints }: MuiThemeProps) => ({
  carouselCard: {
    position: 'relative',
    padding: '64px 72px',

    [breakpoints.down('xs')]: {
      padding: '1rem 1rem',
    },
  },
}))

const GrocerySection6 = () => {
  const classes = useStyles()

  return (
    <Box>
      <Box m={-0.5}>
        <Carousel
          totalSlides={3}
          visibleSlides={1}
          showDots={true}
          autoPlay={true}
          spacing="0px"
          arrowButtonColor="inherit"
          showArrowOnHover={true}
        >
          {cardList.map((item, ind) => (
            <Box p={0.5} key={ind}>
              <BazarCard
                className={classes.carouselCard}
                sx={{ bgcolor: item.bgColor }}
              >
                <FlexBox alignItems="center" flexWrap="wrap">
                  <Box flex="1 1 0">
                    <H5 fontWeight="600" fontSize="18px" mb={1}>
                      {item.subtitle}
                    </H5>
                    <H3 mb={4} fontSize="35px" lineHeight="1.37">
                      {item.title}
                    </H3>

                    <Link href={item.shopUrl}>
                      <a>
                        <Button variant="contained" color="primary">
                          Shop Now
                        </Button>
                      </a>
                    </Link>
                  </Box>
                  <LazyImage
                    src={item.imgUrl}
                    width="320px"
                    height="auto"
                    objectFit="contain"
                  />
                </FlexBox>
              </BazarCard>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  )
}

const cardList = [
  {
    title: '25% Special Off Today Only for Vegetables',
    subtitle: 'Till 10 Sept, 2021',
    imgUrl:
      '/assets/images/products/kisspng-organic-food-leaf-vegetable-fruit-rich-vegetables-5aa9f4d026ae09 1.png',
    shopUrl: '/',
    bgColor: '#F6FFE5',
  },
  {
    title: '15% Off for All Product Only Need to Subscribe',
    subtitle: 'Subscribe Us',
    imgUrl:
      '/assets/images/products/kisspng-organic-food-milk-food-gift-baskets-grocery-5abeaffc1e5b25 1.png',
    shopUrl: '/',
    bgColor: '#FFF8E5',
  },
  {
    title: '25% Special Off Today Only for Vegetables',
    subtitle: 'Till 10 Sept, 2021',
    imgUrl:
      '/assets/images/products/kisspng-organic-food-leaf-vegetable-fruit-rich-vegetables-5aa9f4d026ae09 1.png',
    shopUrl: '/',
    bgColor: '#F6FFE5',
  },
]
export default GrocerySection6
