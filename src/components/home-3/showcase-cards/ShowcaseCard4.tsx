import { H3, Paragraph } from '@component/Typography'
import { styled, SvgIconProps } from '@material-ui/core'
import { alpha, Box } from '@material-ui/system'
import React from 'react'

export interface ShowcaseCard4Props {
  title: string
  body: string
  Icon: (props: SvgIconProps) => JSX.Element
}

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.paper, 0.5),
  borderRadius: 4,
  boxShadow: '0px 0px 28px rgba(3, 0, 71, 0.01)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem 3rem',
  transition: 'all 250ms ease-in-out',
  '&:hover': {
    boxShadow: theme.shadows[3],
  },
}))

const ShowcaseCard4: React.FC<ShowcaseCard4Props> = ({ title, body, Icon }) => {
  return (
    <StyledBox>
      <Icon
        sx={{
          color: 'primary.dark',
          fontSize: 50,
          textAlign: 'center',
          mb: '1.5rem',
        }}
      />
      <H3 fontWeight={900} textAlign="center" mb="0.3rem">
        {title}
      </H3>
      <Paragraph color="grey.600" textAlign="center">
        {body}
      </Paragraph>
    </StyledBox>
  )
}

export default ShowcaseCard4
