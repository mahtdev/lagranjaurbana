import BazarImage from '@component/BazarImage'
import NavLink2 from '@component/nav-link/NavLink2'
import { H1, Paragraph, Span } from '@component/Typography'
import { Grid, styled } from '@material-ui/core'
import { alpha } from '@material-ui/system'
import Link from 'next/link'
import React from 'react'

const StyledGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.paper, 0.5),
  borderRadius: 4,
  boxShadow: theme.shadows[4],
  alignItems: 'center',
  transition: 'all 250ms ease-in-out',
  '&:hover': {
    boxShadow: theme.shadows[3],
  },
  [theme.breakpoints.down('sm')]: {
    '&': {
      padding: '2rem',
    },
    '& .css-wxv7nb-MuiGrid-root': {
      paddingBottom: 0,
    },
  },
  [theme.breakpoints.between('md', 'lg')]: {
    '& .css-wxv7nb-MuiGrid-root .makeStyles-root-205': {
      paddingRight: '1.5rem',
    },
  },
}))

const ShowcaseCard3: React.FC = () => {
  return (
    <Link href="/home-3">
      <a>
        <StyledGrid container>
          <Grid item sm={6} xs={12}>
            <BazarImage
              src="/assets/images/products/t-shirt2.png"
              alt="apple-watch-1"
              sx={{
                mx: 'auto',
                maxWidth: '100%',
                maxHeight: '225px',
              }}
            />
          </Grid>

          <Grid item sm={6} xs={12} py="2rem">
            <Paragraph color="grey.600" mb="0.5rem">
              MEN'S SHOE
            </Paragraph>
            <H1 lineHeight={1.3}>
              <Span color="primary.600" lineHeight={1.3}>
                Stylish
              </Span>{' '}
              Genuine <br /> Comfy T-shirts
            </H1>

            <Paragraph color="grey.600" mt="0.5rem" mb="1rem">
              Handcrafted from genuine Italian leather. One inner compartment with
              black satin lining
            </Paragraph>

            <NavLink2 title="SHOP NOW" />
          </Grid>
        </StyledGrid>
      </a>
    </Link>
  )
}

export default ShowcaseCard3
