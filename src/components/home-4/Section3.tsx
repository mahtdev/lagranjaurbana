import { Container, Grid } from '@material-ui/core'
import React, { FC } from 'react'
import HomeFourCard3 from './homeFour-cards/HomeFourCard3'

const Section3: FC = () => {
  return (
    <Container sx={{ mb: '4rem' }}>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <HomeFourCard3
            imgUrl="/assets/images/products/table.png"
            title="Big Saves on Home Decoration. Save Upto 80%"
            body="Easy payment policy, 12 months 0% in interest."
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <HomeFourCard3
            color="white"
            bgColor="grey.600"
            imgUrl="/assets/images/products/clothes.png"
            title="Exclusive Men’s Clothes. Save Upto 50%"
            body="Comfortable, stylish, elegant and long lasting."
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Section3
