import BazarAvatar from '@component/BazarAvatar'
import BazarCard from '@component/BazarCard'
import Carousel from '@component/carousel/Carousel'
import FlexBox from '@component/FlexBox'
import Quote from '@component/icons/Quote'
import { H5, Span } from '@component/Typography'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { MuiThemeProps } from '@theme/theme'
import clsx from 'clsx'
import React from 'react'

const useStyles = makeStyles(({ breakpoints, palette }: MuiThemeProps) => ({
  carouselCard: {
    position: 'relative',
    padding: '2.25rem 5rem',
  },
  quoteContent: {
    padding: '3.5rem 6rem',
  },
  avatar: {
    height: 64,
    width: 64,
    marginTop: '0.3rem',
    marginBottom: '1rem',
    marginRight: '1rem',
  },
  quote: {
    position: 'absolute',
    color: palette.text.primary,
    fontSize: '4rem',
    opacity: 0.08,
  },
  quoteOpen: {
    left: 0,
    top: 0,
  },
  quoteClose: {
    right: 0,
    bottom: 0,
    transform: 'rotate(180deg)',
  },

  [breakpoints.down('xs')]: {
    carouselCard: {
      padding: '1rem 1rem',
    },
    quoteContent: {
      padding: '1.25rem 3rem',
    },
    quote: {
      fontSize: '2rem',
    },
  },
}))

const GrocerySection9 = () => {
  const classes = useStyles()

  return (
    <Box>
      <Box m={-0.5}>
        <Carousel
          totalSlides={3}
          visibleSlides={1}
          showDots={true}
          spacing="0px"
          arrowButtonColor="inherit"
          showArrowOnHover={true}
        >
          {cardList.map((_item, ind) => (
            <Box p={0.5} key={ind}>
              <BazarCard className={classes.carouselCard}>
                <FlexBox
                  className={classes.quoteContent}
                  position="relative"
                  flexWrap="wrap"
                >
                  <Quote className={clsx(classes.quote, classes.quoteOpen)} />
                  <BazarAvatar
                    className={classes.avatar}
                    src="/assets/images/faces/7.png"
                  />
                  <Box maxWidth="410px">
                    <Span color="grey.700">
                      Satisfied by their professionalism ! Got my tea bags in time.
                      Didn't have to pay any delivery charge. I can't believe that.
                      Keep it up !
                    </Span>
                    <H5 mt={1} fontWeight="700">
                      Jonathon Doe
                    </H5>
                  </Box>
                  <Quote className={clsx(classes.quote, classes.quoteClose)} />
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
export default GrocerySection9
