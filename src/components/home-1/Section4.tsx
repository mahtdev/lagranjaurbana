import BazarCard from '@component/BazarCard'
import DottedStar from '@component/icons/DottedStar'
import RankBadge from '@component/icons/RankBadge'
import { Box, Container, Grid } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import CategorySectionHeader from '../CategorySectionHeader'
import ProductCard4 from '../product-cards/ProductCard4'
import ProductCard5 from '../product-cards/ProductCard5'

const Section4 = () => {
  return (
    <Box mb={7.5}>
      <Container>
        <Box>
          <Grid container spacing={4}>
            <Grid item lg={6} xs={12}>
              <CategorySectionHeader
                icon={<RankBadge />}
                title="Top Ratings"
                seeMoreLink="#"
              />
              <BazarCard sx={{ p: '1rem' }}>
                <Grid container spacing={4}>
                  {topRatedList.map((item) => (
                    <Grid item md={3} sm={6} xs={6} key={item.title}>
                      <Link href={item.productUrl}>
                        <a>
                          <ProductCard4 {...item} />
                        </a>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </BazarCard>
            </Grid>
            <Grid item md={6} xs={12}>
              <CategorySectionHeader
                icon={<DottedStar />}
                title="Featured Brands"
                seeMoreLink="#"
              />
              <BazarCard sx={{ p: '1rem' }}>
                <Grid container spacing={4}>
                  {brandList.map((item) => (
                    <Grid item sm={6} xs={12} key={item.title}>
                      <Link href={item.productUrl}>
                        <a>
                          <ProductCard5 {...item} />
                        </a>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </BazarCard>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

const topRatedList = [
  {
    imgUrl: '/assets/images/products/camera-1.png',
    title: 'Camera',
    rating: 4,
    price: 3300,
    reviewCount: 49,
    productUrl: '/product/d1',
  },
  {
    imgUrl: '/assets/images/products/shoes-2.png',
    title: 'Shoe',
    rating: 4.75,
    price: 400,
    reviewCount: 20,
    productUrl: '/product/d12',
  },
  {
    imgUrl: '/assets/images/products/mobile-1.png',
    title: 'Phone',
    rating: 5,
    price: 999,
    reviewCount: 65,
    productUrl: '/product/d14',
  },
  {
    imgUrl: '/assets/images/products/watch-1.png',
    title: 'Watch',
    rating: 5,
    price: 999,
    reviewCount: 75,
    productUrl: '/product/d16',
  },
]

const brandList = [
  {
    imgUrl: '/assets/images/products/london-britches.png',
    title: 'London Britches',
    productUrl: '/product/e1',
  },
  {
    imgUrl: '/assets/images/products/jim and jiko.png',
    title: 'Jim & Jago',
    productUrl: '/product/e14',
  },
]

export default Section4
