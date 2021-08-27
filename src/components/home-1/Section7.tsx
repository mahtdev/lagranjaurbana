import BazarCard from '@component/BazarCard'
import { H3 } from '@component/Typography'
import productDatabase from '@data/product-database'
import { Box, Container, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import CategorySectionHeader from '../CategorySectionHeader'
import FlexBox from '../FlexBox'
import ProductCard1 from '../product-cards/ProductCard1'
import ProductCategoryItem from './ProductCategoryItem'

const Section7 = () => {
  const [type, setType] = useState('brands')
  const [selected, setSelected] = useState('')
  const [list, setList] = useState<any[]>([])

  const handleCategoryClick = (brand: any) => () => {
    if (selected.match(brand)) {
      setSelected('')
    } else setSelected(brand)
  }

  useEffect(() => {
    if (type === 'brands') setList(brandList)
    else setList(shopList)
  }, [type])

  return (
    <Container sx={{ mb: '70px' }}>
      <FlexBox>
        <BazarCard
          sx={{
            display: { xs: 'none', md: 'block' },
            borderRadius: '10px',
            padding: '1.25rem',
            mr: '1.75rem',
            height: '100%',
          }}
        >
          <FlexBox mt={-1} mb={1}>
            <H3
              fontWeight="600"
              fontSize="20px"
              padding="0.5rem 1rem"
              style={{ cursor: 'pointer' }}
              color={type === 'brands' ? 'grey.900' : 'grey.600'}
              onClick={() => setType('brands')}
            >
              Brands
            </H3>
            <H3
              fontWeight="600"
              fontSize="20px"
              paddingTop="0.5rem"
              lineHeight="1.3"
              color="grey.400"
            >
              |
            </H3>
            <H3
              fontWeight="600"
              fontSize="20px"
              padding="0.5rem 1rem"
              color={type === 'shops' ? 'grey.900' : 'grey.600'}
              style={{ cursor: 'pointer' }}
              onClick={() => setType('shops')}
            >
              Shops
            </H3>
          </FlexBox>

          {list.map((brand) => (
            <ProductCategoryItem
              key={brand}
              title={brand}
              imgUrl={`/assets/images/${type}/${brand}.png`}
              isSelected={!!selected.match(brand)}
              onClick={handleCategoryClick(brand)}
              sx={{
                mb: '0.75rem',
                bgcolor: selected.match(brand) ? 'white' : 'grey.100',
              }}
            />
          ))}

          <ProductCategoryItem
            title={`View All ${type}`}
            isSelected={!!selected.match(`all-${type}`)}
            onClick={handleCategoryClick(`all-${type}`)}
            sx={{
              mt: '4rem',
              bgcolor: selected.match(`all-${type}`),
            }}
          />
        </BazarCard>

        <Box flex="1 1 0" minWidth="0px">
          <CategorySectionHeader title="Mobile Phones" seeMoreLink="#" />

          <Grid container spacing={3}>
            {productDatabase.slice(81, 90).map((item, ind) => (
              <Grid item lg={4} sm={6} xs={12} key={ind}>
                <ProductCard1 off={25} hoverEffect {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </FlexBox>
    </Container>
  )
}

const brandList = ['apple', 'dell', 'xiaomi', 'asus', 'sony', 'acer']
const shopList = ['herman miller', 'otobi', 'hatil', 'steelcase']

export default Section7
