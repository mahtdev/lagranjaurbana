import FlexBox from '@component/FlexBox'
import LazyImage from '@component/LazyImage'
import NavLink from '@component/nav-link/NavLink'
import { Box, Card, Grid } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import StyledMegaMenu from './StyledMegaMenu'

interface Image {
  imgUrl: string
  href: string
}

interface SubCategory {
  title: string
  href: string
}

interface Category {
  title: string
  href?: string
  subCategories: SubCategory[]
}

interface MegaMenu {
  categories: Category[]
  rightImage?: Image
  bottomImage?: Image
}

interface MegaMenuProps {
  data: MegaMenu
  minWidth?: string
}

const MegaMenu1: React.FC<MegaMenuProps> = ({
  data: { categories, rightImage, bottomImage },
  minWidth,
}) => {
  return categories ? (
    <StyledMegaMenu>
      <Card elevation={2} sx={{ ml: '1rem', minWidth }}>
        <FlexBox px={2.5} py={1.75} alignItems="unset">
          <Box flex="1 1 0">
            <Grid container spacing={4}>
              {categories?.map((item, ind) => (
                <Grid item md={3} key={ind}>
                  {item.href ? (
                    <NavLink className="title-link" href={item.href}>
                      {item.title}
                    </NavLink>
                  ) : (
                    <Box className="title-link">{item.title}</Box>
                  )}
                  {item.subCategories?.map((sub, ind) => (
                    <NavLink className="child-link" href={sub.href} key={ind}>
                      {sub.title}
                    </NavLink>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Box>

          {rightImage && (
            <Box mt={1.5}>
              <Link href={rightImage.href}>
                <a>
                  <LazyImage
                    src={rightImage.imgUrl}
                    objectFit="contain"
                    width="137px"
                    height="318px"
                  />
                </a>
              </Link>
            </Box>
          )}
        </FlexBox>

        {bottomImage && (
          <Link href={bottomImage.href}>
            <a>
              <Box position="relative" height="170px">
                <LazyImage
                  src={bottomImage.imgUrl}
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </a>
          </Link>
        )}
      </Card>
    </StyledMegaMenu>
  ) : null
}

MegaMenu1.defaultProps = {
  minWidth: '760px',
}

export default MegaMenu1
