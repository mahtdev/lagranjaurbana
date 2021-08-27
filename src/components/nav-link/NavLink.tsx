import { CSSProperties, makeStyles } from '@material-ui/styles'
import { MuiThemeProps } from '@theme/theme'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { AnchorHTMLAttributes } from 'react'

const useStyles = makeStyles(({ palette }: MuiThemeProps) => ({
  root: ({ isCurrentRoute }: any) => ({
    position: 'relative',
    color: isCurrentRoute ? palette.primary.main : 'inherit',
    transition: 'color 150ms ease-in-out',
    '&:hover': {
      color: `${palette.primary.main} !important`,
    },
  }),
}))

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  style?: CSSProperties
  className?: string
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  style,
  className,
  ...props
}) => {
  const { pathname } = useRouter()

  const checkRouteMatch = () => {
    if (href === '/') return pathname === href
    return pathname.includes(href)
  }

  const classes = useStyles({ isCurrentRoute: checkRouteMatch() })

  return (
    <Link href={href}>
      <a
        className={clsx(classes.root, className)}
        href={href}
        style={style}
        {...props}
      >
        {children}
      </a>
    </Link>
  )
}

export default NavLink
