import BazarCard from '@component/BazarCard'
import LazyImage from '@component/LazyImage'
import { H4 } from '@component/Typography'
import { makeStyles } from '@material-ui/styles'
import { SxProps } from '@material-ui/system'
import { MuiThemeProps } from '@theme/theme'
import React, { HtmlHTMLAttributes } from 'react'

export interface ProductCategoryItemProps extends HtmlHTMLAttributes<HTMLElement> {
  isSelected?: boolean
  imgUrl?: string
  title: string
  sx: SxProps
}

const useStyles = makeStyles(({ shadows }: MuiThemeProps) => ({
  categoryItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.75rem 1rem',
    borderRadius: 5,
    cursor: 'pointer',

    '&:hover': {
      boxShadow: shadows[2],
    },
  },
}))

const ProductCategoryItem: React.FC<ProductCategoryItemProps> = ({
  title,
  isSelected,
  imgUrl,
  sx = {},
}) => {
  const classes = useStyles()

  return (
    <BazarCard
      className={classes.categoryItem}
      sx={{ bgcolor: isSelected ? 'white' : 'grey.100', ...sx }}
      elevation={isSelected ? 2 : 0}
    >
      {imgUrl && (
        <LazyImage
          width="20px"
          height="20px"
          layout="fixed"
          objectFit="cover"
          src={imgUrl}
          alt="apple"
        />
      )}
      <H4 ml={2} lineHeight="1" textTransform="capitalize">
        {title}
      </H4>
    </BazarCard>
  )
}

export default ProductCategoryItem
