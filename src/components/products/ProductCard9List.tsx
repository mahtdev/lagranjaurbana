import FlexBox from '@component/FlexBox'
import ProductCard9 from '@component/product-cards/ProductCard9'
import productDatabase from '@data/product-database'
import { Pagination } from '@material-ui/core'
import React from 'react'
import { Span } from '../Typography'

export interface ProductCard9ListProps {}

const ProductCard9List: React.FC<ProductCard9ListProps> = () => {
  return (
    <div>
      {productDatabase.slice(95, 104).map((item, ind) => (
        <ProductCard9 key={ind} {...item} />
      ))}

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

export default ProductCard9List
