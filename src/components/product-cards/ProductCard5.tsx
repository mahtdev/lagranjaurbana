import HoverBox from '@component/HoverBox'
import LazyImage from '@component/LazyImage'
import { H4 } from '@component/Typography'
import { Box } from '@material-ui/core'
import React from 'react'

export interface ProductCard5Props {
  imgUrl: string
  title: string
}

const ProductCard5: React.FC<ProductCard5Props> = ({ imgUrl, title }) => {
  return (
    <Box>
      <HoverBox borderRadius="5px" mb={1}>
        <LazyImage
          src={imgUrl}
          width={260}
          height={175}
          layout="responsive"
          objectFit="cover"
          alt={title}
        />
      </HoverBox>
      <H4 fontSize="14px" fontWeight="600">
        {title}
      </H4>
    </Box>
  )
}

export default ProductCard5
