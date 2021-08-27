import HoverBox from '@component/HoverBox'
import LazyImage from '@component/LazyImage'
import { Card, Chip } from '@material-ui/core'
import React from 'react'

export interface ProductCard6Props {
  imgUrl: string
  title: string
  subtitle: string
}

const ProductCard6: React.FC<ProductCard6Props> = ({ title, subtitle, imgUrl }) => {
  return (
    <Card sx={{ position: 'relative' }}>
      <Chip
        color="secondary"
        label={title}
        size="small"
        sx={{
          position: 'absolute',
          fontWeight: '600',
          fontSize: '10px',
          px: '8px',
          top: '0.875rem',
          left: '0.875rem',
          zIndex: 2,
        }}
      />

      <Chip
        color="default"
        sx={{
          position: 'absolute',
          fontWeight: '600',
          fontSize: '10px',
          px: '8px',
          top: '1.875rem',
          right: '0.875rem',
          zIndex: 2,
        }}
        label={subtitle}
        size="small"
      />

      <HoverBox position="relative" height="150px" borderRadius="8px">
        <LazyImage src={imgUrl} layout="fill" objectFit="cover" borderRadius="8px" />
      </HoverBox>
    </Card>
  )
}

export default ProductCard6
