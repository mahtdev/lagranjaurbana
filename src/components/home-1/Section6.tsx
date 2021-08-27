import BazarCard from '@component/BazarCard'
import productDatabase from '@data/product-database'
import { Box, Container, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import CategorySectionHeader from '../CategorySectionHeader'
import FlexBox from '../FlexBox'
import ProductCard1 from '../product-cards/ProductCard1'
import ProductCategoryItem from './ProductCategoryItem'

const Section6 = () => {
  const [selected, setSelected] = useState('')

  const handleCategoryClick = ({
    currentTarget: { id: brand },
  }: React.MouseEvent<HTMLElement>) => {
    if (selected === brand) {
      setSelected('')
    } else setSelected(brand)
    return ''
  }

  return (
    <Container sx={{ mb: '80px' }}>
      <FlexBox>
        <BazarCard
          sx={{
            display: { xs: 'none', md: 'block' },
            borderRadius: '10px',
            padding: '1.25rem',
            mr: '1.75rem',
            minWidth: '240px',
            height: '100%',
          }}
        >
          {brandList.map((brand) => (
            <ProductCategoryItem
              key={brand}
              id={brand}
              title={brand}
              sx={{ mb: '0.75rem' }}
              imgUrl={`/assets/images/brands/${brand}.png`}
              isSelected={selected === brand}
              onClick={handleCategoryClick}
            />
          ))}

          <ProductCategoryItem
            id="all"
            title="View All Brands"
            isSelected={selected === 'all'}
            onClick={handleCategoryClick}
            sx={{
              mt: '4rem',
              height: '44px',
              justifyContent: 'center',
            }}
          />
        </BazarCard>

        <Box flex="1 1 0" minWidth="0px">
          <CategorySectionHeader title="Cars" seeMoreLink="#" />
          <Grid container spacing={3}>
            {productDatabase.slice(0, 6).map((item, ind) => (
              <Grid item lg={4} sm={6} xs={12} key={ind}>
                <ProductCard1 hoverEffect {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </FlexBox>
    </Container>
  )
}

const brandList = ['ferrari', 'tesla', 'bmw', 'toyota', 'mini', 'ford']

export default Section6
