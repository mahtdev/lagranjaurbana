import BazarImage from '@component/BazarImage'
import { H3, H4 } from '@component/Typography'
import { Card, Container, Grid } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import React from 'react'

const StyledContent = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,

  '&:after': {
    content: '" "',
    position: 'absolute',
    height: '100px',
    width: '200px',
    top: 0,
    right: 0,

    background: theme.palette.grey[300],
    zIndex: -1,
    borderRadius: '300px 300px 0 0',
    marginRight: -100,
  },

  '&:before': {
    content: '" "',
    position: 'absolute',
    height: '100px',
    width: '200px',
    bottom: 0,
    left: 0,

    background: theme.palette.grey[300],
    zIndex: -1,
    borderRadius: '0 0 300px 300px',
    marginLeft: -100,
    marginBottom: -50,
  },
}))

const Section2 = () => {
  return (
    <Container id="features" sx={{ mb: '7rem' }}>
      <H3
        fontSize="40px"
        textAlign="center"
        fontWeight="900"
        color="secondary.main"
        mb={7.5}
      >
        Powerful Features
      </H3>

      <StyledContent>
        <Grid container spacing={7}>
          {list.map((item) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={item.title}>
              <Card
                elevation={3}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '260px',
                }}
              >
                <BazarImage
                  src={`/assets/images/icons/${item.icon}.svg`}
                  alt={item.title}
                  sx={{ mb: '1.5rem', height: 64 }}
                />
                {/* <item.icon color="inherit" sx={{fontSize=: "64px", mb: "1.5rem"}} /> */}
                <H4
                  fontSize="18px"
                  fontWeight="700"
                  maxWidth="200px"
                  textAlign="center"
                  mx="auto"
                >
                  {item.title}
                </H4>
              </Card>
            </Grid>
          ))}
        </Grid>
      </StyledContent>
    </Container>
  )
}

const list = [
  {
    icon: 'verify',
    title: 'SEO Friendly',
  },
  {
    icon: 'cloud-data',
    title: 'Server Side Rendered',
  },
  {
    icon: 'multivendor',
    title: 'Multi-Vendor Support',
  },
  {
    icon: 'code',
    title: 'Clean Code',
  },
  {
    icon: 'optimization',
    title: 'Optimized for Mobile',
  },
  {
    icon: 'lighting',
    title: 'Fast',
  },
  {
    icon: 'admin-dashboard',
    title: 'Admin Dashboard',
  },
  {
    icon: 'figma',
    title: 'Figma Ready',
  },
]

export default Section2
