import { Small } from '@component/Typography'
import Link from 'next/link'
import React, { FC } from 'react'

interface NavLinkProps {
  title: string
  url?: string
}

const NavLink2: FC<NavLinkProps> = ({ url, title = 'SHOP NOW' }) => {
  return url ? (
    <Link href={url}>
      <a>
        <Small fontWeight="900" borderBottom={2} borderColor="primary.600">
          {title}
        </Small>
      </a>
    </Link>
  ) : (
    <Small fontWeight="900" borderBottom={2} borderColor="primary.600">
      {title}
    </Small>
  )
}

export default NavLink2
