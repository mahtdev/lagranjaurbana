import BazarButton from '@component/BazarButton'
import { Box, Card, debounce, MenuItem, TextField } from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import { makeStyles } from '@material-ui/styles'
import { MuiThemeProps } from '@theme/theme'
import Link from 'next/link'
import React, { useCallback, useEffect, useRef, useState } from 'react'

const useStyles = makeStyles(({ palette, ...theme }: MuiThemeProps) => ({
  searchIcon: {
    color: palette.grey[600],
    marginRight: 6,
  },
  dropdownHandler: {
    borderTopRightRadius: 300,
    borderBottomRightRadius: 300,
    whiteSpace: 'pre',
    borderLeft: `1px solid ${palette.text.disabled}`,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  searchResultCard: {
    position: 'absolute',
    top: '100%',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    width: '100%',
    zIndex: 99,
  },
}))

const GrocerySearchBox = () => {
  const [resultList, setResultList] = useState<string[]>([])
  const parentRef = useRef()

  const classes = useStyles()

  const search = debounce((e) => {
    const value = e.target?.value

    if (!value) setResultList([])
    else setResultList(dummySearchResult)
  }, 200)

  const hanldeSearch = useCallback((event) => {
    event.persist()
    search(event)
  }, [])

  const handleDocumentClick = () => {
    setResultList([])
  }

  useEffect(() => {
    window.addEventListener('click', handleDocumentClick)
    return () => {
      window.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  return (
    <Box
      position="relative"
      flex="1 1 0"
      maxWidth="670px"
      mx="auto"
      {...{ ref: parentRef }}
    >
      <TextField
        variant="outlined"
        placeholder="Searching for..."
        fullWidth
        onChange={hanldeSearch}
        InputProps={{
          sx: {
            height: 44,
            borderRadius: 300,
            paddingRight: 0,
            color: 'grey.700',
            overflow: 'hidden',
          },
          endAdornment: (
            <BazarButton
              color="primary"
              variant="contained"
              disableElevation
              sx={{
                px: '3rem',
                height: '100%',
                borderRadius: '0 300px 300px 0',
              }}
            >
              Search
            </BazarButton>
          ),
          startAdornment: (
            <SearchOutlined className={classes.searchIcon} fontSize="small" />
          ),
        }}
      />

      {!!resultList.length && (
        <Card className={classes.searchResultCard} elevation={2}>
          {resultList.map((item) => (
            <Link href={`/product/search/${item}`} key={item}>
              <MenuItem key={item}>{item}</MenuItem>
            </Link>
          ))}
        </Card>
      )}
    </Box>
  )
}

const dummySearchResult = [
  'Macbook Air 13',
  'Asus K555LA',
  'Acer Aspire X453',
  'iPad Mini 3',
]

export default GrocerySearchBox
