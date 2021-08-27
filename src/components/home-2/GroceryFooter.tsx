import AppStore from '@component/AppStore'
import BazarIconButton from '@component/BazarIconButton'
import BazarImage from '@component/BazarImage'
import Facebook from '@component/icons/Facebook'
import Google from '@component/icons/Google'
import Instagram from '@component/icons/Instagram'
import Twitter from '@component/icons/Twitter'
import Youtube from '@component/icons/Youtube'
import { Paragraph } from '@component/Typography'
import { Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { MuiThemeProps } from '@theme/theme'
import Link from 'next/link'
import React from 'react'
import FlexBox from '../FlexBox'

const useStyles = makeStyles(({ palette }: MuiThemeProps) => ({
  root: {
    marginBottom: '1rem',

    '@media only screen and (max-width: 900px)': {
      marginBottom: '3.75rem',
    },
  },
  link: {
    position: 'relative',
    display: 'block',
    padding: '0.3rem 0rem',
    color: palette.grey[500],
    cursor: 'pointer',
    borderRadius: 4,

    '&:hover': {
      color: palette.grey[100],
    },
  },
}))

const GrocerFooter = () => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <Box
        sx={{
          p: '40px',
          bgcolor: '#141850',
          color: 'white',
          borderRadius: '8px',
        }}
      >
        <Link href="/">
          <a>
            <BazarImage mb={2.5} src="/assets/images/logo.svg" alt="logo" />
          </a>
        </Link>
        <Grid container spacing={6}>
          <Grid item md={6} sm={6} xs={12}>
            <Paragraph mb={2.5} color="grey.500" maxWidth="370px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero
              id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus
              vel ut sollicitudin elit at amet.
            </Paragraph>

            <AppStore />
          </Grid>

          <Grid item md={6} sm={6} xs={12}>
            <Box mt={-0.6}>
              {customerCareLinks.map((item, ind) => (
                <Link href="/" key={ind}>
                  <a className={classes.link}>{item}</a>
                </Link>
              ))}
            </Box>

            <FlexBox className="flex" mx={-0.625} mt={2}>
              {iconList.map((item, ind) => (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopenner"
                  key={ind}
                >
                  <BazarIconButton
                    m={0.5}
                    bgcolor="rgba(0,0,0,0.2)"
                    fontSize="12px"
                    padding="10px"
                  >
                    <item.icon fontSize="inherit" />
                  </BazarIconButton>
                </a>
              ))}
            </FlexBox>
          </Grid>
        </Grid>
      </Box>
    </footer>
  )
}

const customerCareLinks = [
  'Help Center',
  'Track Your Order',
  'Corporate & Bulk Purchasing',
  'Returns & Refunds',
]

const iconList = [
  { icon: Facebook, url: 'https://www.facebook.com/UILibOfficial' },
  { icon: Twitter, url: '/' },
  {
    icon: Youtube,
    url: 'https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg',
  },
  { icon: Google, url: '/' },
  { icon: Instagram, url: '/' },
]

export default GrocerFooter
