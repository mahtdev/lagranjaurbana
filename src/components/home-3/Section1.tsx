import CreditCardVerifiedIcon from '@component/icons/CreditCardVerified'
import FeedbackThumbsUpIcon from '@component/icons/FeedbackThumbsUp'
import Navbar from '@component/navbar/Navbar'
import Spacer from '@component/Spacer'
import { Container, Grid } from '@material-ui/core'
import React, { FC, Fragment } from 'react'
import ShowcaseCard1 from './showcase-cards/ShowcaseCard1'
import ShowcaseCard2 from './showcase-cards/ShowcaseCard2'
import ShowcaseCard3 from './showcase-cards/ShowcaseCard3'
import ShowcaseCard4 from './showcase-cards/ShowcaseCard4'
import ShowcaseCard5 from './showcase-cards/ShowcaseCard5'

const Section1: FC = () => {
  return (
    <Fragment>
      <Navbar />
      <Container sx={{ pt: '3rem', mb: '4rem' }}>
        <Grid container spacing={3}>
          <Grid item lg={4} md={5} xs={12}>
            <ShowcaseCard1 />
          </Grid>

          <Grid item lg={8} md={7} xs={12}>
            <ShowcaseCard2 />
            <Spacer mt="1.5rem" />
            <ShowcaseCard3 />
          </Grid>
        </Grid>

        <Spacer mb="1.5rem" />

        <Grid container spacing={3}>
          <Grid item md={3} xs={6}>
            <ShowcaseCard4
              Icon={CreditCardVerifiedIcon}
              title="Secure Payment"
              body="100% secured payment & privacy"
            />
          </Grid>
          <Grid item md={3} xs={6}>
            <ShowcaseCard4
              Icon={FeedbackThumbsUpIcon}
              title="Great Feedback"
              body="More than 97% positive & happy customers"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <ShowcaseCard5 />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  )
}

export default Section1
