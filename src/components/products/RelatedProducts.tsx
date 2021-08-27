import ProductCard1 from '@component/product-cards/ProductCard1'
import { H3 } from '@component/Typography'
import productDatabase from '@data/product-database'
import { Box, Grid } from '@material-ui/core'
import React from 'react'

export interface RelatedProductsProps {}

const RelatedProducts: React.FC<RelatedProductsProps> = () => {
  return (
    <Box mb={7.5}>
      <H3 mb={3}>Realted Products</H3>
      <Grid container spacing={8}>
        {productDatabase.slice(185, 189).map((item, ind) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
            <ProductCard1 {...item} hoverEffect />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default RelatedProducts
