import BazarCard from '@component/BazarCard'
import Category from '@component/icons/Category'
import LazyImage from '@component/LazyImage'
import productDatabase from '@data/product-database'
import { Box, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { MuiThemeProps } from '@theme/theme'
import Link from 'next/link'
import React from 'react'
import CategorySectionHeader from '../CategorySectionHeader'

const useStyles = makeStyles(({ shadows }: MuiThemeProps) => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.75rem',
    borderRadius: 8,
    transition: 'all 250ms ease-in-out',

    '&:hover': {
      boxShadow: shadows[3],
    },
  },
}))

const Section10 = () => {
  const classes = useStyles()

  return (
    <Container sx={{ mb: '70px' }}>
      <CategorySectionHeader
        title="Categorias"
        icon={<Category color="primary" />}
        seeMoreLink="#"
      />

      <Grid container spacing={3}>
        {categoryList.map((item, ind) => (
          <Grid item lg={2} md={3} sm={4} xs={12} key={ind}>
            <Link href="/">
              <a>
                <BazarCard className={classes.card} elevation={1}>
                  <LazyImage
                    src={productDatabase[ind * 13 + 100].imgUrl}
                    alt="fashion"
                    height="52px"
                    width="52px"
                    objectFit="contain"
                    borderRadius="8px"
                  />
                  <Box fontWeight="600" ml={1.25}>
                    {item}
                  </Box>
                </BazarCard>
              </a>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const categoryList = [
  'Automobile',
  'Car',
  'Fashion',
  'Electronics',
  'Mobile',
  'Laptop',
  'Desktop',
  'Tablet',
  'Fashion',
  'Electronics',
  'Furniture',
  'Camera',
]

export default Section10
