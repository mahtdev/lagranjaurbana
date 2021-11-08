import HoverBox from '@component/HoverBox'
import LazyImage from '@component/LazyImage'
import { Card, ImageListItemBar } from '@material-ui/core'
import React from 'react'

export interface ProductCard6Props {
  imgUrl: string
  title: string
}

const ProductCard6: React.FC<ProductCard6Props> = ({ title, imgUrl }) => {
  return (
    <Card sx={{ position: 'relative' }}>
      <HoverBox position='relative' height='150px' borderRadius='8px'>
        <LazyImage src={imgUrl} layout='fill' objectFit='cover' borderRadius='8px' />
        <ImageListItemBar
          title={title}
          sx={{ textAlign: 'center' }}
        />
      </HoverBox>
    </Card>
  )
}

export default ProductCard6
