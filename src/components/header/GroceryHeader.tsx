import BazarButton from '@component/BazarButton'
import CategoryMenu from '@component/categories/CategoryMenu'
import FlexBox from '@component/FlexBox'
import Category from '@component/icons/Category'
import ShoppingBagOutlined from '@component/icons/ShoppingBagOutlined'
import MiniCart from '@component/mini-cart/MiniCart'
import GrocerySearchBox from '@component/search-box/GrocerySearchBox'
import Login from '@component/sessions/Login'
import { useAppContext } from '@context/app/AppContext'
import {
  Badge,
  Box,
  Container,
  Dialog,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import PersonOutline from '@material-ui/icons/PersonOutline'
import { makeStyles } from '@material-ui/styles'
import { MuiThemeProps } from '@theme/theme'
import { layoutConstant } from '@utils/constants'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useState } from 'react'

type GroceryHeaderProps = {
  className?: string
  isFixed?: boolean
}

const useStyles = makeStyles(({ palette, ...theme }: MuiThemeProps) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    height: layoutConstant.headerHeight,
    background: palette.background.paper,
    transition: 'height 250ms ease-in-out',

    [theme.breakpoints.down('sm')]: {
      height: layoutConstant.mobileHeaderHeight,
    },
  },
}))

const GroceryHeader: React.FC<GroceryHeaderProps> = ({ isFixed }) => {
  const [sidenavOpen, setSidenavOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  const toggleSidenav = () => setSidenavOpen(!sidenavOpen)
  const toggleDialog = () => setDialogOpen(!dialogOpen)

  const { state } = useAppContext()
  const { cartList } = state.cart

  const classes = useStyles()

  const cartHandle = (
    <Badge badgeContent={cartList.length} color="primary">
      <Box
        component={IconButton}
        ml={2.5}
        bgcolor="grey.200"
        p={1.25}
        onClick={toggleSidenav}
      >
        <ShoppingBagOutlined />
      </Box>
    </Badge>
  )

  return (
    <div className={clsx(classes.root)}>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <FlexBox
          sx={{
            alignItems: 'center',
            mr: '1rem',
            minWidth: '170px',
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Link href="/">
            <a>
              <img src="/assets/images/logo.svg" alt="logo" />
            </a>
          </Link>

          {isFixed && (
            <CategoryMenu>
              <FlexBox color="grey.600" alignItems="center" ml={2}>
                <BazarButton color="inherit">
                  <Category fontSize="small" color="inherit" />
                  <KeyboardArrowDown fontSize="small" color="inherit" />
                </BazarButton>
              </FlexBox>
            </CategoryMenu>
          )}
        </FlexBox>

        <FlexBox justifyContent="center" flex="1 1 0">
          <GrocerySearchBox />
        </FlexBox>

        <FlexBox sx={{ alignItems: 'center', display: { xs: 'none', md: 'flex' } }}>
          <Box
            component={IconButton}
            ml={2}
            p={1.25}
            bgcolor="grey.200"
            onClick={toggleDialog}
          >
            <PersonOutline />
          </Box>
          {cartHandle}
        </FlexBox>

        <Dialog
          open={dialogOpen}
          fullWidth={isMobile}
          scroll="body"
          onClose={toggleDialog}
        >
          <Login />
        </Dialog>

        <Drawer
          open={sidenavOpen}
          anchor="right"
          onClose={toggleSidenav}
          SlideProps={{ style: { overflow: 'hidden' } }}
        >
          <MiniCart />
        </Drawer>
      </Container>
    </div>
  )
}

export default GroceryHeader
