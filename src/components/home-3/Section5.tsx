import CarouselCard2 from '@component/carousel-cards/CarouselCard2'
import Carousel from '@component/carousel/Carousel'
import { Box, Container, styled } from '@material-ui/core'
import Image from 'next/image'
import React, { FC } from 'react'

const Section5: FC = () => {
  const ContentWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: '#F3F6F9',
    boxShadow: theme.shadows[1],
    borderRadius: '8px',
    position: 'relative',
  }))

  const BadgeBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    right: '3rem',
    top: 0,
    [theme.breakpoints.down('sm')]: {
      '&': {
        width: '85px',
        right: '1rem',
      },
    },
  }))

  const expireDate = new Date('Dec 5, 2022').getTime()
  const arrowButtonStyle = { backgroundColor: 'white', color: '#2B3445' }

  return (
    <Container sx={{ pb: '4rem' }}>
      <ContentWrapper>
        <Carousel
          totalSlides={3}
          visibleSlides={1}
          infinite={true}
          leftButtonStyle={arrowButtonStyle}
          rightButtonStyle={arrowButtonStyle}
        >
          {[1, 2, 3].map((item) => (
            <CarouselCard2
              key={item}
              imgUrl="/assets/images/products/xiaomi-watch.png"
              productName="Apple Watch Series 4 (Black)"
              expireDate={expireDate}
            />
          ))}
        </Carousel>

        <BadgeBox>
          <Image src="/assets/images/badges/hot.svg" width={110} height={130} />
        </BadgeBox>
      </ContentWrapper>
    </Container>
  )
}

export default Section5
