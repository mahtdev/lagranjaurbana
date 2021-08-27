import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { MuiThemeProps } from '@theme/theme'
import clsx from 'clsx'
import React from 'react'

const useStyles = makeStyles(({ palette, shadows }: MuiThemeProps) => ({
  root: {
    display: 'none',
    position: 'absolute',
    left: '100%',
    right: 'auto',
    top: 0,
    zIndex: 99,

    '& .title-link, & .child-link': {
      color: 'inherit',
      fontWeight: 600,
      display: 'block',
      padding: '0.5rem 0px',
    },

    '& .child-link': {
      fontWeight: 400,
    },

    '& .mega-menu-content': {
      padding: '0.5rem 0px',
      marginLeft: '1rem',
      borderRadius: 4,
      backgroundColor: palette.background.paper,
      boxShadow: shadows[3],
      transition: 'all 250ms ease-in-out',
    },
  },
}))

const StyledMegaMenu: React.FC = ({ children }) => {
  const classes = useStyles()

  return <Box className={clsx(classes.root, 'mega-menu')}>{children}</Box>
}

export default StyledMegaMenu
