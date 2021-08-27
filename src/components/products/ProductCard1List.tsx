import FlexBox from '@component/FlexBox'
import ProductCard1 from '@component/product-cards/ProductCard1'
import { Span } from '@component/Typography'
import productDatabase from '@data/product-database'
import { Grid, Pagination } from '@material-ui/core'
import React from 'react'

export interface ProductCard1ListProps {}

const ProductCard1List: React.FC<ProductCard1ListProps> = () => {
  return (
    <div>
      <Grid container spacing={3}>
        {productDatabase.slice(95, 104).map((item, ind) => (
          <Grid item lg={4} sm={6} xs={12} key={ind}>
            <ProductCard1 {...item} />
          </Grid>
        ))}
      </Grid>

      <FlexBox
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        mt={4}
      >
        <Span color="grey.600">Showing 1-9 of 1.3k Products</Span>
        <Pagination count={10} variant="outlined" color="primary" />
      </FlexBox>
    </div>
  )
}

export default ProductCard1List
