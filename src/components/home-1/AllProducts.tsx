import React from 'react'
import Category from '@component/icons/Category'
import CategorySectionCreator from '@component/CategorySectionCreator'
import BazarCard from '@component/BazarCard'
import { Box, Grid } from '@material-ui/core'
import productDatabase from '@data/product-database'
import ProductCard1 from '@component/product-cards/ProductCard1'

const AllProducts = () => {
  return (
    <CategorySectionCreator
      icon={<Category color='secondary' />}
      title='Todos nuestros productos'
      seeMoreLink='#'
    >
      <BazarCard
        sx={{
          display: { xs: 'none', md: 'block' },
          borderRadius: '10px',
          padding: '1.25rem',
          mr: '1.75rem',
          height: '100%',
          backgroundColor: 'grey.100',
        }}
      >
        <Box flex='1 1 0' minWidth='0px'>
          <Grid container spacing={4}>
            {/*{productDatabase.slice(81, 90).map((item, ind) => (*/}
            {/*  <Grid item lg={4} sm={6} xs={12} key={ind}>*/}
            {/*    <ProductCard1 off={50} hoverEffect {...item} />*/}
            {/*  </Grid>*/}
            {/*))}*/}
          </Grid>
        </Box>
      </BazarCard>
    </CategorySectionCreator>
  )
}


export default AllProducts
