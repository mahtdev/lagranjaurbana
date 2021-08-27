import navigations from '@data/navigations'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { MuiThemeProps } from '@theme/theme'
import React from 'react'
import CategoryMenuItem from './CategoryMenuItem'
import MegaMenu1 from './mega-menu/MegaMenu1'
import MegaMenu2 from './mega-menu/MegaMenu2'

export interface CategoryMenuCardProps {
  open?: boolean
  position?: 'absolute' | 'relative'
}

const useStyles = makeStyles(({ palette, shadows }: MuiThemeProps) => ({
  root: (props: CategoryMenuCardProps) => ({
    position: props.position || 'unset',
    padding: '0.5rem 0px',
    left: 0,
    right: 'auto',
    top: props.position === 'absolute' ? 'calc(100% + 0.7rem)' : '0.5rem',
    borderRadius: 4,
    transform: props.open ? 'scaleY(1)' : 'scaleY(0)',
    transformOrigin: 'top',
    backgroundColor: palette.background.paper,
    boxShadow: shadows[2],
    transition: 'all 250ms ease-in-out',
    zIndex: 98,
  }),
}))

const CategoryMenuCard: React.FC<CategoryMenuCardProps> = (props) => {
  const classes = useStyles(props)

  const megaMenu: any = {
    MegaMenu1,
    MegaMenu2,
  }

  return (
    <Box className={classes.root}>
      {navigations.map((item) => {
        let MegaMenu = megaMenu[item.menuComponent]

        return (
          <CategoryMenuItem
            title={item.title}
            href={item.href}
            // icon={item.icon}
            caret={!!item.menuData}
            key={item.title}
          >
            <MegaMenu data={item.menuData || {}} />
          </CategoryMenuItem>
        )
      })}
    </Box>
  )
}

CategoryMenuCard.defaultProps = {
  position: 'absolute',
}

export default CategoryMenuCard
