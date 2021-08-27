import BazarCard from '@component/BazarCard'
import NewArrival from '@component/icons/NewArrival'
import { Grid } from '@material-ui/core'
import React from 'react'
import CategorySectionCreator from '../CategorySectionCreator'
import ProductCard2 from '../product-cards/ProductCard2'

const Section5 = () => {
  return (
    <CategorySectionCreator
      icon={<NewArrival />}
      title="New Arrivals"
      seeMoreLink="#"
    >
      <BazarCard sx={{ p: '1rem' }}>
        <Grid container spacing={3}>
          {productList.map((item) => (
            <Grid item lg={2} md={3} sm={4} xs={6} key={item.title}>
              <ProductCard2 {...item} />
            </Grid>
          ))}
        </Grid>
      </BazarCard>
    </CategorySectionCreator>
  )
}

const productList = [
  {
    title: 'Sunglass',
    price: 150,
    imgUrl: '/assets/images/products/imagegoggles.png',
    productUrl: '/product/a1',
  },
  {
    title: 'Makeup',
    price: 250,
    imgUrl: '/assets/images/products/lipstick (2).png',
    productUrl: '/product/a12',
  },
  {
    title: 'Smart Watch',
    price: 350,
    imgUrl: '/assets/images/products/bgwatch.png',
    productUrl: '/product/a13',
  },
  {
    title: 'Lipstick',
    price: 15,
    imgUrl: '/assets/images/products/lipstick (1).png',
    productUrl: '/product/a14',
  },
  {
    title: 'Green plant',
    price: 55,
    imgUrl: '/assets/images/products/lipstick (4).png',
    productUrl: '/product/a15',
  },
  {
    title: 'Bonsai tree',
    price: 535,
    imgUrl: '/assets/images/products/lipstick (3).png',
    productUrl: '/product/a1',
  },
]

export default Section5
