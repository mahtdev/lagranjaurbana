import FlexBox from '@component/FlexBox'
import LazyImage from '@component/LazyImage'
import { H1, H4, Paragraph } from '@component/Typography'
import { Button, Container } from '@material-ui/core'
import { Box } from '@material-ui/system'
import Link from 'next/link'
import React from 'react'
import { Link as Scroll } from 'react-scroll'
import Header from './Header'

const Section1 = () => {
  return (
    <Box
      sx={{
        background: 'url(/assets/images/landing/landing-bg-1.svg) center/cover',
      }}
    >
      <Header />

      <Container
        id="section-1"
        sx={{ mt: '4rem', mb: '7rem', position: 'relative' }}
      >
        <Box maxWidth="830px" mx="auto" mb={12.5} textAlign="center">
          <Box mx="auto" maxWidth="200px" mb={2}>
            <LazyImage
              src="/assets/images/logo.svg"
              width={362}
              height={73}
              layout="responsive"
            />
          </Box>
          <H4 color="primary.main" fontSize="18px">
            Next.js, Material-UI & TypeScript
          </H4>
          <H1 color="secondary.main" fontSize="40px" mb={2} fontWeight="900">
            React Ecommerce Template
          </H1>
          <Paragraph color="grey.700" maxWidth="400px" mx="auto" mb={4}>
            SEO friendly server side rendered Material-UI Next.js multipurpose
            ecommerce template.
          </Paragraph>
          <FlexBox justifyContent="center" m={-1}>
            <Link
              href="https://material-ui.com/store/items/bazar-pro-react-ecommerce-template/"
              passHref={true}
            >
              <Button variant="contained" color="primary" sx={{ m: '0.5rem' }}>
                Purchase Now
              </Button>
            </Link>
            <Scroll to="demos" duration={400} offset={-72 - 16} smooth={true}>
              <Button variant="outlined" color="primary" sx={{ m: '0.5rem' }}>
                View Demos
              </Button>
            </Scroll>
          </FlexBox>
        </Box>

        <LazyImage
          src="/assets/images/landing/page-group.png"
          width={1207}
          height={383}
          layout="responsive"
        />

        {/* <Card
          sx={{
            position: 'absolute',
            bottom: '-36px',
            left: 'calc(50% - 95px)',
            boxShadow: 'regular',
            borderRadius: '8px',
          }}
        >
          <Button variant="text" sx={{ p: '1.5rem 2.5rem' }}>
            <Span fontWeight="700">Ready For</Span>
            <Figma />
          </Button>
        </Card> */}
      </Container>
    </Box>
  )
}

export default Section1
