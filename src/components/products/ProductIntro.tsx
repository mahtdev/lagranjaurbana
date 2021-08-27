import BazarAvatar from '@component/BazarAvatar'
import BazarButton from '@component/BazarButton'
import BazarRating from '@component/BazarRating'
import LazyImage from '@component/LazyImage'
import { H1, H2, H3, H6 } from '@component/Typography'
import { useAppContext } from '@context/app/AppContext'
import { Box, Grid } from '@material-ui/core'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'
import { CartItem } from '@reducer/cartReducer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'
import ImageViewer from 'react-simple-image-viewer'
import FlexBox from '../FlexBox'

export interface ProductIntroProps {
  imgUrl?: string[]
  title: string
  price: number
  id?: string | number
}

const ProductIntro: React.FC<ProductIntroProps> = ({
  imgUrl = [],
  title,
  price = 200,
  id,
}) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const { state, dispatch } = useAppContext()
  const cartList: CartItem[] = state.cart.cartList
  const router = useRouter()
  const routerId = router.query.id as string
  const cartItem = cartList.find((item) => item.id === id || item.id === routerId)

  const handleImageClick = (ind: number) => () => {
    setSelectedImage(ind)
  }

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  const handleCartAmountChange = useCallback(
    (amount) => () => {
      dispatch({
        type: 'CHANGE_CART_AMOUNT',
        payload: {
          qty: amount,
          name: title,
          price,
          imgUrl: imgUrl[0],
          id: id || routerId,
        },
      })
    },
    []
  )

  return (
    <Box width="100%">
      <Grid container spacing={3} justifyContent="space-around">
        <Grid item md={6} xs={12} alignItems="center">
          <Box>
            <FlexBox justifyContent="center" mb={6}>
              <LazyImage
                src={imgUrl[selectedImage]}
                onClick={() =>
                  openImageViewer(imgUrl.indexOf(imgUrl[selectedImage]))
                }
                alt={title}
                height="300px"
                width="auto"
                loading="eager"
                objectFit="contain"
              />
              {isViewerOpen && (
                <ImageViewer
                  src={imgUrl}
                  currentIndex={currentImage}
                  onClose={closeImageViewer}
                  backgroundStyle={{
                    backgroundColor: 'rgba(0,0,0,0.9)',
                  }}
                />
              )}
            </FlexBox>
            <FlexBox overflow="auto">
              {imgUrl.map((url, ind) => (
                <Box
                  height={64}
                  width={64}
                  minWidth={64}
                  bgcolor="white"
                  borderRadius="10px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  border="1px solid"
                  style={{ cursor: 'pointer' }}
                  ml={ind === 0 ? 'auto' : 0}
                  mr={ind === imgUrl.length - 1 ? 'auto' : '10px'}
                  borderColor={selectedImage === ind ? 'primary.main' : 'grey.400'}
                  onClick={handleImageClick(ind)}
                  key={ind}
                >
                  <BazarAvatar src={url} variant="square" height={40} />
                </Box>
              ))}
            </FlexBox>
          </Box>
        </Grid>

        <Grid item md={6} xs={12} alignItems="center">
          <H1 mb={2}>{title}</H1>

          <FlexBox alignItems="center" mb={2}>
            <Box>Brand:</Box>
            <H6 ml={1}>Xiaomi</H6>
          </FlexBox>

          <FlexBox alignItems="center" mb={2}>
            <Box lineHeight="1">Rated:</Box>
            <Box mx={1} lineHeight="1">
              <BazarRating color="warn" fontSize="1.25rem" value={4} readOnly />
            </Box>
            <H6 lineHeight="1">(50)</H6>
          </FlexBox>

          <Box mb={3}>
            <H2 color="primary.main" mb={0.5} lineHeight="1">
              ${price.toFixed(2)}
            </H2>
            <Box color="inherit">Stock Available</Box>
          </Box>

          {!cartItem?.qty ? (
            <BazarButton
              variant="contained"
              color="primary"
              sx={{
                mb: '36px',
                px: '1.75rem',
                height: '40px',
              }}
              onClick={handleCartAmountChange(1)}
            >
              Add to Cart
            </BazarButton>
          ) : (
            <FlexBox alignItems="center" mb={4.5}>
              <BazarButton
                sx={{ p: '9px' }}
                variant="outlined"
                size="small"
                color="primary"
                onClick={handleCartAmountChange(cartItem?.qty - 1)}
              >
                <Remove fontSize="small" />
              </BazarButton>
              <H3 fontWeight="600" mx={2.5}>
                {cartItem?.qty.toString().padStart(2, '0')}
              </H3>
              <BazarButton
                sx={{ p: '9px' }}
                variant="outlined"
                size="small"
                color="primary"
                onClick={handleCartAmountChange(cartItem?.qty + 1)}
              >
                <Add fontSize="small" />
              </BazarButton>
            </FlexBox>
          )}

          <FlexBox alignItems="center" mb={2}>
            <Box>Sold By:</Box>
            <Link href="/shop/fdfdsa">
              <a>
                <H6 ml={1}>Mobile Store</H6>
              </a>
            </Link>
          </FlexBox>
        </Grid>
      </Grid>
    </Box>
  )
}

ProductIntro.defaultProps = {
  imgUrl: [
    '/assets/images/products/headphone.png',
    '/assets/images/products/hiclipart.com (16).png',
    '/assets/images/products/hiclipart.com (18).png',
  ],
  title: 'Mi Note 11 Pro',
  price: 1100,
}

export default ProductIntro
