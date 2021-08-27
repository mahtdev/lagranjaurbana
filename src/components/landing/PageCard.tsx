import FlexBox from '@component/FlexBox'
import LazyImage from '@component/LazyImage'
import { H3 } from '@component/Typography'
import { Card, IconButton } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import Visibility from '@material-ui/icons/Visibility'
import { Box } from '@material-ui/system'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Wrapper = styled(Box)({
  '.overlay': {
    transition: 'opacity 250ms ease-in-out',
  },
  '&:hover': {
    '& .overlay': {
      opacity: 1,
    },
  },
})

export interface PageCardProps {
  imgUrl: string
  previewUrl: string
  title: string
  disabled?: boolean
}

const PageCard: React.FC<PageCardProps> = ({
  imgUrl,
  previewUrl,
  title,
  disabled,
}) => {
  return (
    <Fragment>
      <Wrapper
        p="10% 10% 0px"
        bgcolor="grey.200"
        border="1px solid"
        borderColor="grey.300"
        borderRadius="8px 8px 0 0"
        position="relative"
        mb={3}
      >
        <Card elevation={3}>
          <LazyImage
            src={imgUrl}
            width={470}
            height={397}
            layout="responsive"
            objectFit="cover"
            objectPosition="top center"
          />
        </Card>

        {!disabled && (
          <Link href={previewUrl}>
            <FlexBox
              className="overlay"
              position="absolute"
              top="0"
              right="0"
              left="0"
              bottom="0"
              borderRadius="8px"
              bgcolor="rgba(0,0,0, 0.54)"
              justifyContent="center"
              alignItems="center"
              sx={{ opacity: 0 }}
            >
              <IconButton sx={{ bgcolor: 'white', '&:hover': { bgcolor: 'white' } }}>
                <Visibility fontSize="small" />
              </IconButton>
            </FlexBox>
          </Link>
        )}
      </Wrapper>

      <H3 textAlign="center" lineHeight="1">
        {title}
      </H3>
    </Fragment>
  )
}

export default PageCard
