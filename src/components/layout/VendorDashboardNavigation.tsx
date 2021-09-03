import FlexBox from '@component/FlexBox'
import Assignment from '@material-ui/icons/Assignment'
import Dashboard from '@material-ui/icons/Dashboard'
import NoteAdd from '@material-ui/icons/NoteAdd'
// import Settings from '@material-ui/icons/Settings'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import { useRouter } from 'next/router'
import React from 'react'
import { DashboardNavigationWrapper, StyledDashboardNav } from './DashboardStyle'

const VendorDashboardNavigation = () => {
  const { pathname } = useRouter()

  return (
    <DashboardNavigationWrapper sx={{ px: '0px', py: '1.5rem', color: 'grey.900' }}>
      {linkList.map((item) => (
        <StyledDashboardNav
          isCurrentPath={pathname.includes(item.href)}
          href={item.href}
          key={item.title}
        >
          <FlexBox alignItems="center">
            <item.icon
              className="nav-icon"
              fontSize="small"
              color="inherit"
              sx={{ mr: '10px' }}
            />

            <span>{item.title}</span>
          </FlexBox>
          <span>{item.count}</span>
        </StyledDashboardNav>
      ))}
    </DashboardNavigationWrapper>
  )
}

const linkList = [
  {
    href: '/vendor/dashboard',
    title: 'Escritorio',
    icon: Dashboard,
  },
  {
    href: '/vendor/products',
    title: 'Productos',
    icon: Assignment,
    count: 300,
  },
  {
    href: '/vendor/add-product',
    title: 'Nuevo producto',
    icon: NoteAdd,
  },
  {
    href: '/vendor/orders',
    title: 'Ordernes',
    icon: ShoppingCart,
    count: 40,
  },
  // {
  //   href: '/vendor/account-settings',
  //   title: 'Account Settings',
  //   icon: Settings,
  // },
]

export default VendorDashboardNavigation
