import CategorySectionHeader from '@component/CategorySectionHeader'
import { Container, Grid } from '@material-ui/core'
import React, { FC } from 'react'
import HomeFourCard2 from './homeFour-cards/HomeFourCard2'

const Section2: FC = () => {
  return (
    <Container sx={{ mb: '4rem' }}>
      <CategorySectionHeader title="Featured Categories" />
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <HomeFourCard2
            title="CAMERA"
            imgUrl="/assets/images/products/camera.png"
            headingStyle={{ pl: '1.5rem', pb: '1rem', pt: '1.5rem' }}
          />
        </Grid>
        <Grid container item md={6} xs={12} spacing={3}>
          {categoryList.map((category, ind) => (
            <Grid item xs={6} key={ind}>
              <HomeFourCard2 title={category.title} imgUrl={category.imgUrl} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

const categoryList = [
  {
    title: 'GAMING',
    imgUrl: '/assets/images/products/game-box.png',
  },
  {
    title: 'WATCH',
    imgUrl: '/assets/images/products/watch.png',
  },
  {
    title: 'DRONE',
    imgUrl: '/assets/images/products/drone.png',
  },
  {
    title: 'PHONE',
    imgUrl: '/assets/images/products/mobile-2.png',
  },
]

export default Section2
