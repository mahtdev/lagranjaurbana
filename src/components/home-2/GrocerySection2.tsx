import FlexBox from '@component/FlexBox'
import FeedbackThumbsUp from '@component/icons/FeedbackThumbsUp'
import Shield from '@component/icons/Shield'
import Truck from '@component/icons/Truck'
import { H4, Span } from '@component/Typography'
import { Grid } from '@material-ui/core'
import React from 'react'

const GrocerySection2 = () => {
  return (
    <Grid container spacing={3}>
      {serviceList.map((item, ind) => (
        <Grid item md={4} sm={6} xs={12} key={ind}>
          <FlexBox
            alignItems="center"
            p={3}
            border="1px solid"
            borderColor="grey.400"
            borderRadius="8px"
          >
            <FlexBox alignItems="center" color="grey.600" fontSize="50px" mr={2}>
              <item.icon fontSize="inherit" color="inherit">
                {item.icon}
              </item.icon>
            </FlexBox>
            <div>
              <H4 color="grey.900" fontSize="1.25rem" fontWeight="700">
                {item.title}
              </H4>
              <Span color="grey.600">{item.subtitle}</Span>
            </div>
          </FlexBox>
        </Grid>
      ))}
    </Grid>
  )
}

const serviceList = [
  {
    icon: Truck,
    title: 'Entrega rapida',
    subtitle: 'Entrega gratuita a partir de $500 MXN',
  },
  {
    icon: FeedbackThumbsUp,
    title: 'Todos nos recomiendan',
    subtitle: '97% de experiencias positivas',
  },
  {
    icon: Shield,
    title: 'Pagos',
    subtitle: '100% Seguros',
  },
]

export default GrocerySection2
