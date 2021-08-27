import BlogCard1 from '@component/blog-cards/BlogCard1'
import CategorySectionHeader from '@component/CategorySectionHeader'
import { Container, Grid } from '@material-ui/core'
import React, { FC } from 'react'

const Section7: FC = () => {
  return (
    <Container sx={{ mb: '4rem' }}>
      <CategorySectionHeader title="Get Ideas from our Blog" />
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <BlogCard1
            comments={3}
            url="#"
            imgUrl="/assets/images/products/blog-1.png"
            createdAt="24 Feb 2020"
            title="Art of Keeping Home Minimal & Organised."
            description="Maecenas leo ante, gravida vel lectus ac, iaculis lobortis enim. Proin nec orci nec nisl consequat molestie quis sit amet elit. Ut venenatis dignissim diam in auctor."
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <BlogCard1
            url="#"
            comments={14}
            createdAt="12 Jan 2020"
            imgUrl="/assets/images/products/blog-2.png"
            title="The Monthly Guide to Cleaning Your Home"
            description="Maecenas leo ante, gravida vel lectus ac, iaculis lobortis enim. Proin nec orci nec nisl consequat molestie quis sit amet elit. Ut venenatis dignissim diam in auctor."
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Section7
