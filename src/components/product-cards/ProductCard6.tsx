import HoverBox from '@component/HoverBox'
import LazyImage from '@component/LazyImage'
import { Card, Chip } from '@material-ui/core'
import React from 'react'

export interface ProductCard6Props {
  imgUrl: string
  title: string
}

const ProductCard6: React.FC<ProductCard6Props> = ({ title, imgUrl }) => {
  return (
    <Card sx={{ position: 'relative' }}>
      <Chip
        color='secondary'
        label={title}
        size='small'
        sx={{
          position: 'absolute',
          fontWeight: '600',
          fontSize: '15px',
          px: '8px',
          top: '80%',
          left: '25%',
          zIndex: 2,
        }}
      />

      <HoverBox position='relative' height='150px' borderRadius='8px'>
        <LazyImage src={imgUrl} layout='fill' objectFit='cover' borderRadius='8px' />
      </HoverBox>
    </Card>
  )
}

export default ProductCard6
