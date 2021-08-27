import BazarButton from '@component/BazarButton'
import BazarRating from '@component/BazarRating'
import FlexBox from '@component/FlexBox'
import HoverBox from '@component/HoverBox'
import LazyImage from '@component/LazyImage'
import { H4 } from '@component/Typography'
import { Box } from '@material-ui/core'
import { Favorite, FavoriteBorder } from '@material-ui/icons'
import Link from 'next/link'
import React, { CSSProperties, useState } from 'react'

export interface ProductCard3Props {
  className?: string
  style?: CSSProperties
  id: number
  imgUrl: string
  rating: number
  title: string
  price: number
  off?: number
  hideReview?: boolean
  hideFavoriteIcon?: boolean
}

const ProductCard3: React.FC<ProductCard3Props> = ({
  id,
  imgUrl,
  rating,
  title,
  price,
  off = 20,
  hideReview,
  hideFavoriteIcon,
}) => {
  const [favorite, setFavorite] = useState(false)

  return (
    <Box>
      <Link href={`/product/${id}`}>
        <a>
          <HoverBox>
            <LazyImage
              src={imgUrl}
              width="100%"
              height="auto"
              layout="responsive"
              alt={title}
              mx="auto"
            />
          </HoverBox>
        </a>
      </Link>

      <FlexBox justifyContent="space-between" mt="1rem">
        <Box>
          <H4 fontWeight="600" fontSize="14px" mb={0.5} title={title} ellipsis>
            {title}
          </H4>
          {!hideReview && <BazarRating value={rating} color="warn" readOnly />}

          <FlexBox alignItems="center">
            <Box pr={1} fontWeight="600" color="primary.main">
              ${(price - (price * off) / 100).toFixed(2)}
            </Box>
            {!!off && (
              <Box color="grey.600" fontWeight="600">
                <del>{price?.toFixed(2)}</del>
              </Box>
            )}
          </FlexBox>
        </Box>

        {!hideFavoriteIcon && (
          <BazarButton
            disableRipple
            disableElevation
            sx={{
              alignItems: 'flex-start',
              height: '0',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
            onClick={() => setFavorite((state) => !state)}
          >
            {favorite ? (
              <Favorite fontSize="small" color="primary" />
            ) : (
              <FavoriteBorder fontSize="small" sx={{ opacity: 0.5 }} />
            )}
          </BazarButton>
        )}
      </FlexBox>
    </Box>
  )
}

export default ProductCard3
