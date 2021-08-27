import FlexBox from '@component/FlexBox'
import LazyImage from '@component/LazyImage'
import NavLink2 from '@component/nav-link/NavLink2'
import { H3, Paragraph } from '@component/Typography'
import { AccessTime, CommentOutlined } from '@material-ui/icons/'
import { Box } from '@material-ui/system'
import format from 'date-fns/format'
import React, { FC } from 'react'

interface BlogCard1Props {
  url: string
  title: string
  imgUrl: string
  comments: number
  createdAt: string
  description: string
}

const BlogCard1: FC<BlogCard1Props> = ({
  url,
  title,
  imgUrl,
  comments,
  createdAt,
  description,
}) => {
  // common icon style
  const iconStyle = { color: 'grey.600', mr: '0.3rem', fontSize: '1rem' }

  return (
    <Box>
      <LazyImage
        src={imgUrl}
        width={588}
        height={272}
        layout="responsive"
        sx={{
          '&:hover': {
            transition: '0.3s ease-in-out',
            transform: 'scale(1.1)',
            cursor: 'pointer',
          },
        }}
      />
      <Box py="1.5rem">
        <H3 lineHeight={1.3} color="secondary.900">
          {title}
        </H3>
        <FlexBox alignItems="center" mt="5px">
          <FlexBox alignItems="center" mr="1.5rem">
            <AccessTime sx={iconStyle} />
            <Paragraph>{format(new Date(createdAt), 'dd MMMM, yyyy')}</Paragraph>
          </FlexBox>

          <FlexBox alignItems="center">
            <CommentOutlined sx={iconStyle} />
            <Paragraph>{comments} comments</Paragraph>
          </FlexBox>
        </FlexBox>

        <Paragraph mt="1.2rem" mb="0.7rem">
          {description}
        </Paragraph>

        <NavLink2 title="CONTINUE READING" url={url} />
      </Box>
    </Box>
  )
}

export default BlogCard1
