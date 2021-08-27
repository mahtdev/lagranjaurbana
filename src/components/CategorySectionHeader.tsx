import ArrowRight from '@material-ui/icons/ArrowRight'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import FlexBox from './FlexBox'
import { H2 } from './Typography'

export interface CategorySectionHeaderProps {
  title?: string
  seeMoreLink?: string
  icon?: ReactNode
}

const CategorySectionHeader: React.FC<CategorySectionHeaderProps> = ({
  title,
  seeMoreLink,
  icon,
}) => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center" mb={3}>
      <FlexBox alignItems="center">
        {icon && (
          <FlexBox mr={1} alignItems="center">
            {icon}
          </FlexBox>
        )}
        <H2 fontWeight="bold" lineHeight="1">
          {title}
        </H2>
      </FlexBox>

      {seeMoreLink && (
        <Link href={seeMoreLink}>
          <a>
            <FlexBox alignItems="center" ml={1} color="grey.600">
              View all
              {/* <Box mr={1}>View all</Box> */}
              <ArrowRight fontSize="small" color="inherit" />
              {/* <Icon size="12px" defaultcolor="currentColor">
                right-arrow
              </Icon> */}
            </FlexBox>
          </a>
        </Link>
      )}
    </FlexBox>
  )
}

export default CategorySectionHeader
