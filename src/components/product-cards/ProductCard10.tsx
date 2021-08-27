import BazarButton from '@component/BazarButton'
import BazarCard from '@component/BazarCard'
import BazarChip from '@component/BazarChip'
import BazarIconButton from '@component/BazarIconButton'
import LazyImage from '@component/LazyImage'
import { H3, Span } from '@component/Typography'
import { useAppContext } from '@context/app/AppContext'
import { Box, Dialog, DialogContent } from '@material-ui/core'
import Add from '@material-ui/icons/Add'
import Close from '@material-ui/icons/Close'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import Remove from '@material-ui/icons/Remove'
import RemoveRedEye from '@material-ui/icons/RemoveRedEye'
import { CSSProperties, makeStyles } from '@material-ui/styles'
import { CartItem } from '@reducer/cartReducer'
import { MuiThemeProps } from '@theme/theme'
import Link from 'next/link'
import React, { Fragment, useCallback, useState } from 'react'
import FlexBox from '../FlexBox'
import ProductIntro from '../products/ProductIntro'

export interface ProductCard10Props {
  className?: string
  style?: CSSProperties
  imgUrl: string
  title: string
  price: number
  off?: number
  rating?: number
  id: string | number
  hoverEffect?: boolean
  // className?: string;
  // style?: CSSProperties;
  // imgUrl: string;
  // title: string;
  // price: number;
  // off: number;
  // rating?: number;
  // subcategories?: Array<{
  //   title: string;
  //   url: string;
  // }>;
}

const useStyles = makeStyles(({ palette, ...theme }: MuiThemeProps) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    margin: 'auto',
    overflow: 'hidden',
    transition: 'all 250ms ease-in-out',

    '&:hover': {
      '& $imageHolder': {
        '& .extra-icons': {
          display: 'flex',
        },
      },
    },

    '@media only screen and (max-width: 768px)': {
      '& $imageHolder': {
        '& .extra-icons': {
          display: 'flex',
        },
      },
    },
  },
  imageHolder: {
    position: 'relative',
    display: 'inlin-block',
    textAlign: 'center',

    '& .extra-icons': {
      display: 'none',
      flexDirection: 'column',
      position: 'absolute',
      top: '7px',
      right: '15px',
      cursor: 'pointer',
      zIndex: 2,
    },

    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  details: {
    padding: '1rem',

    '& .title, & .categories': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },

    '& .icon-holder': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },

    '& .favorite-icon': {
      cursor: 'pointer',
    },
  },
  dialogContent: {
    paddingBottom: '1.25rem',
  },
}))

const ProductCard10: React.FC<ProductCard10Props> = ({
  id,
  imgUrl,
  title,
  price,
  off = 0,
  rating,
  hoverEffect,
  ...props
}) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [open, setOpen] = useState(false)

  const classes = useStyles({ hoverEffect })
  const { state, dispatch } = useAppContext()
  const cartItem: CartItem | undefined = state.cart.cartList.find(
    (item) => item.id === id
  )

  const toggleDialog = useCallback(() => {
    setOpen((open) => !open)
  }, [])

  const toggleIsFavorite = async () => {
    setIsFavorite((fav) => !fav)
  }

  const handleCartAmountChange = useCallback(
    (amount) => () => {
      dispatch({
        type: 'CHANGE_CART_AMOUNT',
        payload: {
          name: title,
          qty: amount,
          price,
          imgUrl,
          id,
        },
      })
    },
    []
  )

  return (
    <BazarCard className={classes.root} {...props}>
      <Box className={classes.imageHolder}>
        {!!off && (
          <BazarChip
            position="absolute"
            color="primary"
            size="small"
            fontSize="10px"
            fontWeight="600"
            px={0.375}
            top="10px"
            left="10px"
            label={`${off}% off`}
          />
        )}

        <FlexBox className="extra-icons" flexDirection="column">
          <BazarIconButton p={0.75} onClick={toggleDialog}>
            <RemoveRedEye color="secondary" fontSize="small" />
          </BazarIconButton>
          <BazarIconButton p={0.75} onClick={toggleIsFavorite}>
            {isFavorite ? (
              <Favorite color="primary" fontSize="small" />
            ) : (
              <FavoriteBorder fontSize="small" />
            )}
          </BazarIconButton>
        </FlexBox>

        <Link href={`/product/${id}`}>
          <a>
            <LazyImage
              src={imgUrl}
              width="100%"
              height="auto"
              layout="responsive"
              alt={title}
            />
          </a>
        </Link>
      </Box>

      <Box className={classes.details}>
        <FlexBox>
          <Box flex="1 1 0" minWidth="0px" mr={1}>
            <Link href={`/product/${id}`}>
              <a>
                <H3
                  className="title"
                  fontSize="14px"
                  textAlign="left"
                  fontWeight="600"
                  color="text.secondary"
                  mb={1}
                  title={title}
                >
                  {title}
                </H3>
              </a>
            </Link>

            <Span color="grey.600" mb={1} display="block">
              300ml
            </Span>

            <FlexBox alignItems="center" mt={0.5}>
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

          <FlexBox
            className="add-cart"
            flexDirection="column-reverse"
            alignItems="center"
            justifyContent={!!cartItem?.qty ? 'space-between' : 'flex-start'}
            width="30px"
          >
            <BazarButton
              variant="outlined"
              color="primary"
              sx={{ p: '3px' }}
              onClick={handleCartAmountChange((cartItem?.qty || 0) + 1)}
            >
              <Add fontSize="small" />
            </BazarButton>

            {!!cartItem?.qty && (
              <Fragment>
                <Box color="text.primary" fontWeight="600">
                  {cartItem?.qty}
                </Box>
                <BazarButton
                  variant="outlined"
                  color="primary"
                  sx={{ p: '3px' }}
                  onClick={handleCartAmountChange(cartItem?.qty - 1)}
                >
                  <Remove fontSize="small" />
                </BazarButton>
              </Fragment>
            )}
          </FlexBox>
        </FlexBox>
      </Box>

      <Dialog open={open} maxWidth={false} onClose={toggleDialog}>
        <DialogContent className={classes.dialogContent}>
          <ProductIntro imgUrl={[imgUrl]} title={title} price={price} />
          <BazarIconButton position="absolute" top="0" right="0">
            <Close
              className="close"
              fontSize="small"
              color="primary"
              onClick={toggleDialog}
            />
          </BazarIconButton>
        </DialogContent>
      </Dialog>
    </BazarCard>
  )
}

ProductCard10.defaultProps = {
  id: '324321',
  title: 'ASUS ROG Strix G15',
  imgUrl: '/assets/images/products/macbook.png',
  price: 450,
  rating: 0,
  off: 0,
}

export default ProductCard10
