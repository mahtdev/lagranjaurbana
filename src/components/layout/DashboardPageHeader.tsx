import FlexBox from '@component/FlexBox'
import Sidenav from '@component/sidenav/Sidenav'
import { H2 } from '@component/Typography'
import useWindowSize from '@hook/useWindowSize'
import { styled } from '@material-ui/core/styles'
import Menu from '@material-ui/icons/Menu'
import { Box } from '@material-ui/system'
import React from 'react'

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',

  marginTop: theme.spacing(-2),
  marginBottom: theme.spacing(3),
  '& .headerHold': {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
  },
  [theme.breakpoints.up('md')]: {
    '& .sidenav': {
      display: 'none',
    },
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    '& .headerHold': {},
  },
}))

export interface DashboardPageHeaderProps {
  icon?: any
  title?: string
  button?: any
  navigation?: any
}

const DashboardPageHeader: React.FC<DashboardPageHeaderProps> = ({
  title,
  button,
  navigation,
  ...props
}) => {
  const width = useWindowSize()
  const isTablet = width < 1025

  return (
    <StyledBox>
      <FlexBox mt={2} className="headerHold">
        <FlexBox alignItems="center">
          {props.icon && <props.icon color="primary" />}
          <H2 ml={1.5} my="0px" lineHeight="1" whiteSpace="pre">
            {title}
          </H2>
        </FlexBox>
        {/* {isTablet && ( */}
        <Box className="sidenav">
          <Sidenav position="left" handle={<Menu fontSize="small" />}>
            {navigation}
          </Sidenav>
        </Box>
        {/* )} */}

        {!isTablet && button}
      </FlexBox>

      {isTablet && !!button && <Box mt={2}>{button}</Box>}
    </StyledBox>
  )
}

export default DashboardPageHeader
