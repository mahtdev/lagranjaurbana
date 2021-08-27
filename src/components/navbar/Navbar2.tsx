import BazarCard from '@component/BazarCard'
import FlexBox from '@component/FlexBox'
import NavLink from '@component/nav-link/NavLink'
import navbarNavigations from '@data/navbarNavigations'
import { Box, Container, MenuItem } from '@material-ui/core'
import ArrowRight from '@material-ui/icons/ArrowRight'
import { makeStyles } from '@material-ui/styles'
import { MuiThemeProps } from '@theme/theme'
import React from 'react'

export interface Navbar2Props {
  navListOpen?: boolean
}

const useStyles = makeStyles(({ palette }: MuiThemeProps) => ({
  navLink: {
    cursor: 'pointer',
    marginRight: '2rem',
    transition: 'color 150ms ease-in-out',
    '&:hover': {
      color: palette.primary.main,
    },
    '&:last-child': {
      marginRight: '0',
    },
  },
  root: {
    '&:hover': {
      '& $rootChild': {
        display: 'block',
      },
    },
  },
  rootChild: {
    display: 'none',
    position: 'absolute',
    left: 0,
    top: '100%',
    zIndex: 5,
  },
  parent: {
    '&:hover': {
      color: palette.primary.main,
      '& > $parentChild': {
        display: 'block',
      },
    },
  },
  parentChild: {
    display: 'none',
    position: 'absolute',
    top: 0,
    left: '100%',
    zIndex: 5,
  },
  categoryMenuButton: {
    background: palette.grey[100],
  },
}))

interface Nav {
  title: string
  url: string
  child: Nav[]
  extLink?: boolean
}

const Navbar2: React.FC<Navbar2Props> = () => {
  const classes = useStyles()

  const renderNestedNav = (list: any[], isRoot = false) => {
    return list?.map((nav: Nav) => {
      if (isRoot) {
        if (nav.url && nav.extLink)
          return (
            <NavLink
              className={classes.navLink}
              href={nav.url}
              key={nav.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {nav.title}
            </NavLink>
          )
        else if (nav.url)
          return (
            <NavLink className={classes.navLink} href={nav.url} key={nav.title}>
              {nav.title}
            </NavLink>
          )
        if (nav.child)
          return (
            <FlexBox
              className={classes.root}
              position="relative"
              flexDirection="column"
              alignItems="center"
              key={nav.title}
            >
              <Box className={classes.navLink}>{nav.title}</Box>
              <Box className={classes.rootChild}>
                <BazarCard
                  sx={{
                    mt: '1.25rem',
                    py: '0.5rem',
                    minWidth: '230px',
                  }}
                  elevation={3}
                >
                  {renderNestedNav(nav.child)}
                </BazarCard>
              </Box>
            </FlexBox>
          )
      } else {
        if (nav.url)
          return (
            <NavLink href={nav.url} key={nav.title}>
              <MenuItem>{nav.title}</MenuItem>
            </NavLink>
          )

        if (nav.child)
          return (
            <Box
              className={classes.parent}
              position="relative"
              minWidth="230px"
              key={nav.title}
            >
              <MenuItem color="grey.700">
                <Box flex="1 1 0" component="span">
                  {nav.title}
                </Box>
                <ArrowRight fontSize="small" />
              </MenuItem>
              <Box className={classes.parentChild} pl={1}>
                <BazarCard sx={{ py: '0.5rem', minWidth: '230px' }} elevation={3}>
                  {renderNestedNav(nav.child)}
                </BazarCard>
              </Box>
            </Box>
          )
      }
    })
  }

  return (
    <BazarCard
      elevation={2}
      sx={{
        position: 'relative',
        height: '60px',
        borderRadius: 0,
        display: { xs: 'none', md: 'flex' },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <div></div>
        <FlexBox>{renderNestedNav(navbarNavigations, true)}</FlexBox>
      </Container>
    </BazarCard>
  )
}

export default Navbar2
