import BazarButton from '@component/BazarButton'
import FlexBox from '@component/FlexBox'
import ProductCard8 from '@component/product-cards/ProductCard8'
import { H2, H3, Span } from '@component/Typography'
import productDatabase from '@data/product-database'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { MuiThemeProps } from '@theme/theme'
import React, { Fragment } from 'react'

export interface FrequentlyBoughtProps {}

const useStyles = makeStyles(({ breakpoints }: MuiThemeProps) => ({
  root: {
    [breakpoints.down('xs')]: {
      '& .card-holder': {
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
      },

      '& .gray-box': {
        minWidth: 0,
        width: '100%',
        marginLeft: 0,
        marginRight: 0,
      },
    },
  },
}))

const FrequentlyBought: React.FC<FrequentlyBoughtProps> = () => {
  const classes = useStyles()

  const list = productDatabase.slice(179, 183)

  return (
    <Box className={classes.root} mb={7.5}>
      <H3 mb={3}>Frequently Bought Together</H3>
      <FlexBox className="card-holder" flexWrap="wrap" m={-1}>
        {list.map((item, ind) => (
          <Fragment key={item.id}>
            <ProductCard8
              sx={{
                m: '0.5rem',
                maxWidth: '220px',
                minWidth: '160px',
                width: '100%',
                flex: '1 1 0',
              }}
              {...item}
            />
            {ind < list.length - 1 && (
              <FlexBox justifyContent="center" alignItems="center">
                <H2 color="grey.600" mx={1}>
                  +
                </H2>
              </FlexBox>
            )}
          </Fragment>
        ))}

        <FlexBox justifyContent="center" alignItems="center">
          <H2 color="grey.600" mx={3}>
            =
          </H2>
        </FlexBox>

        <FlexBox
          className="gray-box"
          border="1px solid"
          borderColor="grey.400"
          m={1}
          borderRadius="8px"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          minWidth={300}
          minHeight={200}
        >
          <H3 color="primary.main">$2500</H3>
          <Span mb={2} fontWeight="600" color="grey.600">
            Save $500
          </Span>

          <FlexBox>
            <BazarButton variant="contained" color="primary" sx={{ mr: '1rem' }}>
              Add to Cart
            </BazarButton>
            <BazarButton variant="outlined" color="primary">
              Add to List
            </BazarButton>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Box>
  )
}

export default FrequentlyBought
