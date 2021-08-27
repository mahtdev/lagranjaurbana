import FlexBox from '@component/FlexBox'
import AlarmClock from '@component/icons/AlarmClock'
import MoneyGuarantee from '@component/icons/MoneyGurantee'
import OnlineSupport from '@component/icons/OnlineSupport'
import Payment from '@component/icons/Payment'
import Truck from '@component/icons/Truck'
import { H3, Span } from '@component/Typography'
import { Container, styled } from '@material-ui/core'
import React, { FC } from 'react'

const Section7: FC = () => {
  const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: '8px',
    flexWrap: 'wrap',
    [theme.breakpoints.between('sm', 'lg')]: {
      '&': {
        justifyContent: 'space-evenly',
      },
    },
    [theme.breakpoints.down('sm')]: {
      '&': {
        justifyContent: 'center',
        flexDirection: 'column',
      },
    },
  }))

  return (
    <Container sx={{ mb: '4rem' }}>
      <StyledFlexBox>
        {serviceList.map((item, ind) => (
          <FlexBox key={ind} p="1rem">
            <item.icon
              fontSize="inherit"
              color="inherit"
              sx={{
                color: 'grey.900',
                fontSize: '40px',
                mr: 1,
              }}
            />
            <div>
              <H3 color="grey.900" lineHeight={1.3}>
                {item.title}
              </H3>
              <Span color="grey.600">{item.subtitle}</Span>
            </div>
          </FlexBox>
        ))}
      </StyledFlexBox>
    </Container>
  )
}

const serviceList = [
  {
    icon: Truck,
    title: 'Fast Delivery',
    subtitle: 'Start from $10',
  },
  {
    icon: MoneyGuarantee,
    title: 'Money Guarantee',
    subtitle: '7 Days Back',
  },
  {
    icon: AlarmClock,
    title: '365 Days',
    subtitle: 'For free return',
  },
  {
    icon: Payment,
    title: 'Payment',
    subtitle: 'Secure system',
  },

  {
    icon: OnlineSupport,
    title: 'Online Support',
    subtitle: '24/7 daily',
  },
]

export default Section7
