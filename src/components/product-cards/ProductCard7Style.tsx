import { Card } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { MuiThemeProps } from '@theme/theme'

const ProductCard7Style = styled(Card)<MuiThemeProps>(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  borderRadius: '10px',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  marginBottom: '1.5rem',
  boxShadow: theme.shadows[2],

  '& .product-details': {
    padding: '20px',
  },

  '& .title': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  '@media only screen and (max-width: 425px)': {
    flexWrap: 'wrap',
    img: {
      height: 'auto',
      minWidth: '100%',
    },
  },
}))

export default ProductCard7Style
