import BazarCard from '@component/BazarCard'
import NavLink2 from '@component/nav-link/NavLink2'
import { H2, Paragraph } from '@component/Typography'
import { Box, Container, styled } from '@material-ui/core'
import React, { FC } from 'react'

const StyledCard = styled(BazarCard)(({ theme }) => ({
  padding: '3rem 4rem',
  borderRadius: '0',
  backgroundImage:
    'linear-gradient(to right,#fff 60%, transparent), url(/assets/images/products/bg-gradient.png)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top right',
  boxShadow: theme.shadows[4],
  '&:hover': {
    boxShadow: theme.shadows[2],
  },
  [theme.breakpoints.down('sm')]: {
    padding: '2rem',
  },
}))

const Section6: FC = () => {
  return (
    <Container sx={{ mb: '4rem' }}>
      <StyledCard>
        <Box maxWidth="390px">
          <H2 lineHeight={1.3}>Build Your Own Youtube Studio Save Upto 70%</H2>
          <Paragraph color="grey.600" mt="0.5rem" mb="1.5rem">
            Everything you need to create your youtube studio
          </Paragraph>

          <NavLink2 title="DISCOVER EQUIPMENTS" url="/home-4" />
        </Box>
      </StyledCard>
    </Container>
  )
}

export default Section6
