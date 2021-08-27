import { Card } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { MuiThemeProps } from '@theme/theme'

const ProductCard9Style = styled(Card)<MuiThemeProps>(({ theme }) => ({
  overflow: 'hidden',
  width: '100%',
  marginBottom: '1.25rem',

  '& .quick-view': {
    position: 'absolute',
    display: 'none',
    flexDirection: 'column',
    top: '0.75rem',
    right: '0.75rem',
  },

  h4: {
    margin: '0.5rem 0px',
    color: theme.palette.secondary.main,
    textAlign: 'left',
  },

  '& .price': {
    display: 'flex',
    marginTop: '0.5rem',
    fontWeight: 600,

    h4: {
      margin: '0px',
      paddingRight: '0.5rem',
      color: theme.palette.primary.main,
    },
    del: {
      color: theme.palette.grey[600],
    },
  },

  '& .icon-holder': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  '& .add-cart': {
    display: 'none',
  },

  '&:hover': {
    '& .add-cart': {
      display: 'flex',
    },
    '& .quick-view': {
      display: 'block',
    },
  },
}))

export default ProductCard9Style
