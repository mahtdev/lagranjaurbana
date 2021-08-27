import FlexBox from '@component/FlexBox'
import { Container } from '@material-ui/core'
import Facebook from '@material-ui/icons/Facebook'
import Favorite from '@material-ui/icons/Favorite'
import Instagram from '@material-ui/icons/Instagram'
import Twitter from '@material-ui/icons/Twitter'
import Youtube from '@material-ui/icons/YouTube'
import React from 'react'

// const Wrapper = styled(Container)`
//   @media only screen and (max-width: 400px) {
//     .flex {
//       padding-bottom: 1rem;
//       width: 100%;
//       justify-content: center;
//     }
//   }
// `;

const Footer = () => {
  return (
    <Container sx={{ py: '4rem' }}>
      <FlexBox justifyContent="space-between" flexWrap="wrap">
        <FlexBox className="flex" alignItems="center">
          Developed with{' '}
          <Favorite
            fontSize="small"
            color="primary"
            sx={{ mx: '0.5rem', fontSize: '16px' }}
          />{' '}
          & Care by Ui Lib
        </FlexBox>

        <FlexBox className="flex">
          {iconList.map((item, ind) => (
            <a href={item.url} target="_blank" rel="noreferrer noopenner" key={ind}>
              <item.icon
                color="inherit"
                sx={{ fontSize: '1.25rem', mx: '0.5rem' }}
              />
            </a>
          ))}
        </FlexBox>
      </FlexBox>
    </Container>
  )
}

const iconList = [
  { icon: Facebook, url: 'https://www.facebook.com/UILibOfficial' },
  { icon: Twitter, url: 'https://twitter.com/uilibofficial' },
  {
    icon: Youtube,
    url: 'https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg',
  },
  { icon: Instagram, url: 'https://www.instagram.com/uilibofficial/' },
]

export default Footer
