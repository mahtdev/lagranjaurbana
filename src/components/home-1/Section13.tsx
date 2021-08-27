import BazarCard from '@component/BazarCard'
import Carousel from '@component/carousel/Carousel'
import FlexBox from '@component/FlexBox'
import HoverBox from '@component/HoverBox'
import GiftBox from '@component/icons/GiftBox'
import LazyImage from '@component/LazyImage'
import { H4 } from '@component/Typography'
import productDatabase from '@data/product-database'
import useWindowSize from '@hook/useWindowSize'
import { Box } from '@material-ui/core'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CategorySectionCreator from '../CategorySectionCreator'

const Section13 = () => {
  const [visibleSlides, setVisibleSlides] = useState(6)
  const width = useWindowSize()

  useEffect(() => {
    if (width < 370) setVisibleSlides(1)
    else if (width < 650) setVisibleSlides(2)
    else if (width < 950) setVisibleSlides(4)
    else setVisibleSlides(6)
  }, [width])

  return (
    <CategorySectionCreator icon={<GiftBox />} title="Big Discounts" seeMoreLink="#">
      <Box my="-0.25rem">
        <Carousel totalSlides={9} visibleSlides={visibleSlides}>
          {productDatabase.slice(60, 69).map((item, ind) => (
            <Box py={0.5} key={item.id}>
              <BazarCard sx={{ p: '1rem' }}>
                <Link href={`/product/${ind + 20}`}>
                  <a>
                    <HoverBox borderRadius="8px" mb={1}>
                      <LazyImage
                        src={item.imgUrl}
                        width="100%"
                        height="auto"
                        layout="responsive"
                        alt={item.title}
                      />
                    </HoverBox>
                    <H4 fontWeight="600" fontSize="14px" mb={0.5}>
                      {item.title}
                    </H4>

                    <FlexBox>
                      <H4
                        fontWeight="600"
                        fontSize="14px"
                        color="primary.main"
                        mr={1}
                      >
                        ${Math.ceil(item.price).toLocaleString()}
                      </H4>

                      <H4 fontWeight="600" fontSize="14px" color="grey.600">
                        <del>${Math.ceil(item.price).toLocaleString()}</del>
                      </H4>
                    </FlexBox>
                  </a>
                </Link>
              </BazarCard>
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  )
}

export default Section13
