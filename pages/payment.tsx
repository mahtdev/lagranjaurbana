import CheckoutNavLayout from '@component/layout/CheckoutNavLayout'
import PaymentForm from '@component/payment/PaymentForm'
import PaymentSummary from '@component/payment/PaymentSummary'
import { Grid } from '@material-ui/core'
import React from 'react'

const Checkout = () => {
  return (
    <CheckoutNavLayout>
      <Grid container flexWrap="wrap-reverse" spacing={3}>
        <Grid item lg={8} md={8} xs={12}>
          <PaymentForm />
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <PaymentSummary />
        </Grid>
      </Grid>
    </CheckoutNavLayout>
  )
}

export default Checkout
