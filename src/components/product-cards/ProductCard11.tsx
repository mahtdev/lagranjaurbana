import LazyImage from '@component/LazyImage'
import { Paragraph } from '@component/Typography'
import { Box } from '@material-ui/core'
import React, { FC } from 'react'

interface ProductCard11Props {
  title: string
  imgUrl: string
  off: number
}
const ProductCard11: FC<ProductCard11Props> = ({ title, imgUrl, off }) => {
  return (
    <Box position="relative" sx={{ boxShadow: 4 }}>
      <LazyImage
        src={imgUrl}
        width={580}
        height={225}
        layout="responsive"
        alt={title}
        mx="auto"
        objectFit="cover"
      />

      <Paragraph
        sx={{
          backgroundColor: 'secondary.100',
          fontWeight: 600,
          borderRadius: '5px',
          padding: '0.5rem 1rem',
          position: 'absolute',
          top: '10px',
          left: '10px',
        }}
      >
        {title}
      </Paragraph>
      <Paragraph
        sx={{
          backgroundColor: 'primary.600',
          fontWeight: 600,
          borderRadius: '5px',
          padding: '0.5rem 1.5rem',
          color: 'white',
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
      >
        {off}% OFF
      </Paragraph>
    </Box>
  )
}

export default ProductCard11
