import Accordion from '@component/accordion/Accordion'
import AccordionHeader from '@component/accordion/AccordionHeader'
import BazarCard from '@component/BazarCard'
import FlexBox from '@component/FlexBox'
import NavLink from '@component/nav-link/NavLink'
import { Span } from '@component/Typography'
import groceryNavigations from '@data/groceryNavigations'
import { Box } from '@material-ui/core'
import React, { Fragment } from 'react'

export interface GrocerySidenavProps {
  isFixed?: boolean
}

const GrocerySidenav: React.FC<GrocerySidenavProps> = ({ isFixed }) => {
  const renderChild = (childList: any[], type = 'parent') => {
    if (type === 'parent')
      return childList.map((item) => (
        <Fragment key={item.title}>
          <NavLink href={item.href} color="grey.700">
            <FlexBox>
              <Span ml="2rem" py={0.75} color="inherit" flex="1 1 0">
                {item.title}
              </Span>
            </FlexBox>
          </NavLink>

          {item.child && renderChild(item.child, 'child')}
        </Fragment>
      ))
    else
      return childList.map((item, ind) => (
        <NavLink href={item.href} color="grey.700" key={ind}>
          <FlexBox key={item.title}>
            <Span ml="3rem" py={0.75} color="inherit" flex="1 1 0">
              {item.title}
            </Span>
          </FlexBox>
        </NavLink>
      ))
  }

  return (
    <BazarCard
      elevation={3}
      sx={{
        position: 'relative',
        p: '20px 20px 14px 24px',
        height: '100%',
        borderRadius: '0px',
        overflow: isFixed ? 'auto' : 'unset',
      }}
    >
      {groceryNavigations.map((item, ind) => (
        <Box mb={1} color="grey.700" key={ind}>
          {item.child ? (
            <Accordion expanded>
              <AccordionHeader
                px={0}
                py={0.75}
                color="inherit"
                justifyContent="flex-start"
              >
                <Box flex="1 1 0">
                  <NavLink href={item.href} color="grey.700">
                    <FlexBox alignItems="center" flex="1 1 0">
                      <item.icon fontSize="small" />
                      <Span
                        color="inherit"
                        fontWeight="600"
                        mr={1.125}
                        ml={1.5}
                        flex="1 1 0"
                      >
                        {item.title}
                      </Span>
                    </FlexBox>
                  </NavLink>
                </Box>
              </AccordionHeader>
              {item.child ? renderChild(item.child) : null}
            </Accordion>
          ) : (
            <NavLink href={item.href} color="grey.700">
              <FlexBox py={0.75} color="inherit" key={item.title}>
                <Box mr={1.5}>
                  <item.icon fontSize="small" />
                </Box>
                <Span color="inherit" fontWeight="600" mr={1.125} flex="1 1 0">
                  {item.title}
                </Span>
              </FlexBox>
            </NavLink>
          )}
        </Box>
      ))}
    </BazarCard>
  )
}

export default GrocerySidenav
