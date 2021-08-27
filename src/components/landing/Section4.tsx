import LazyImage from '@component/LazyImage'
import { H3, H4 } from '@component/Typography'
import { Card, Container, Grid } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import { Box } from '@material-ui/system'
import React from 'react'

const StyledContent = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,

  '&:after': {
    content: '" "',
    position: 'absolute',
    height: 150,
    width: 150,
    top: 0,
    right: 0,

    background: '#fbeef0',
    zIndex: -1,
    borderRadius: '300px',
    marginRight: -75,
    marginTop: -51,
  },

  '&:before': {
    content: '" "',
    position: 'absolute',
    height: 150,
    width: 150,
    bottom: 0,
    left: 0,

    background: theme.palette.grey[300],
    zIndex: -1,
    borderRadius: '300px',
    marginLeft: -75,
    marginBottom: -75,
  },
}))
// `
//   position: relative;
//   z-index: 1;

//   :after,
//   :before {
//     content: " ";
//     position: absolute;
//     height: 150px;
//     width: 150px;

//     background: ${getTheme("colors.grey.300")};
//     z-index: -1;
//   }

//   :after {
//     top: 0;
//     right: 0;
//     border-radius: 300px;
//     margin-right: -75px;
//     margin-top: -65px;
//     background: #fbeef0;
//   }

//   :before {
//     bottom: 0;
//     left: 0;
//     border-radius: 300px;
//     margin-left: -75px;
//     margin-bottom: -65px;
//   }
// `;

const Section4 = () => {
  return (
    <Container id="technologies" sx={{ mb: '7rem' }}>
      <H3
        fontSize="40px"
        textAlign="center"
        fontWeight="900"
        color="secondary.main"
        mb={7.5}
      >
        Technologies Used
      </H3>

      <StyledContent>
        <Grid container spacing={3}>
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
                  boxShadow: 'large',
                }}
              >
                <Box mb={2}>
                  <LazyImage
                    src={item.imgUrl}
                    height={60}
                    width={60}
                    objectFit="contain"
                    objectPosition="center"
                  />
                </Box>
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
    imgUrl: '/assets/images/logos/react.png',
    title: 'React',
  },
  {
    imgUrl: '/assets/images/logos/next-js.png',
    title: 'Next.js',
  },
  {
    imgUrl: '/assets/images/logos/typescript.png',
    title: 'TypeScript',
  },
  {
    imgUrl: '/assets/images/logos/mui.svg',
    title: 'Material-UI',
  },

  //   {
  //     imgUrl: '/assets/images/logos/carousel.png',
  //     title: 'Pure React Carousel',
  //   },
  //   {
  //     imgUrl: '/assets/images/logos/chart-js.png',
  //     title: 'Chart.Js',
  //   },
  //   {
  //     imgUrl: '/assets/images/logos/formik.png',
  //     title: 'Formik',
  //   },
  //   {
  //     imgUrl: '/assets/images/logos/react-dropzone.png',
  //     title: 'React Dropzone',
  //   },
]

export default Section4
