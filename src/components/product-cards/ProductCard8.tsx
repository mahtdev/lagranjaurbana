import BazarCard from '@component/BazarCard'
import FlexBox from '@component/FlexBox'
import HoverBox from '@component/HoverBox'
import LazyImage from '@component/LazyImage'
import { H6, Span } from '@component/Typography'
import { SxProps } from '@material-ui/system'
import Link from 'next/link'
import React from 'react'

export interface ProductCard8Props {
  id: string
  imgUrl: string
  price: number
  title: string
  sx: SxProps
}

const ProductCard8: React.FC<ProductCard8Props> = ({
  id,
  imgUrl,
  price,
  title,
  sx = {},
}) => {
  return (
    <BazarCard sx={{ p: '1rem', ...sx }}>
      <Link href={`/product/${id}`}>
        <a>
          <HoverBox mb={1.5} borderRadius="8px">
            <LazyImage
              src={imgUrl || '/assets/images/products/Rectangle 116.png'}
              borderRadius="8px"
              height={500}
              width={500}
              layout="responsive"
              objectFit="contain"
              objectPosition="center"
            />
          </HoverBox>
          <Span title={title} mb={0.5} color="inherit" ellipsis display="block">
            {title}
          </Span>
          <FlexBox alignItems="center">
            <H6 color="primary.main" mr={0.5}>
              ${price}
            </H6>
            <Span color="grey.600">
              <del>$1600</del>
            </Span>
          </FlexBox>
        </a>
      </Link>
    </BazarCard>
  )
}

export default ProductCard8
