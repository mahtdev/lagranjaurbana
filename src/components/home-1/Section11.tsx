import productDatabase from '@data/product-database'
import { Container, Grid } from '@material-ui/core'
import React from 'react'
import CategorySectionHeader from '../CategorySectionHeader'
import ProductCard1 from '../product-cards/ProductCard1'

const Section11 = () => {
  return (
    <Container sx={{ mb: '70px' }}>
      <CategorySectionHeader title="More For You" seeMoreLink="#" />
      <Grid container spacing={3}>
        {productDatabase.slice(48, 60).map((item, ind) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
            <ProductCard1 off={25} hoverEffect {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Section11
