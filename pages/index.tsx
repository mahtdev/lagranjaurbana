import Promotions from '@component/home-1/Promotions'
// import Section10 from '@component/home-1/Section10'
// import Section11 from '@component/home-1/Section11'
// import Section12 from '@component/home-1/Section12'
// import Section13 from '@component/home-1/Section13'
// import Section2 from '@component/home-1/Section2'
import Categories from '@component/home-1/Categories'
// import Section4 from '@component/home-1/Section4'
// import Section5 from '@component/home-1/Section5'
// import Section6 from '@component/home-1/Section6'
// import Section7 from '@component/home-1/Section7'
// import Section8 from '@component/home-1/Section8'
// import Section9 from '@component/home-1/Section9'
import AppLayout from '@component/layout/AppLayout'
import React from 'react'
import ProductsPromotion from '@component/home-1/ProductsPromotion'
import AllProducts from '@component/home-1/AllProducts'
import ProductsSale from '@component/home-1/ProductsSale'
import { Box, Container } from '@material-ui/core'
import Metodos from '@component/home-2/Metodos'

const IndexPage = () => {

  return (
    <AppLayout>
      <Promotions />
      {/*<Section2 />*/}
      <Categories />
      <Box bgcolor='gray.100'>
        <Container sx={{ py: '2rem' }}>
          <Box mb={6} mt={3}>
            <Metodos />
          </Box>
        </Container>
      </Box>
      <ProductsPromotion />
      <ProductsSale />
      <AllProducts />
      {/*<Section4 />*/}
      {/*<Section5 />*/}
      {/*<Section13 />*/}
      {/*<Section6 />*/}
      {/*<Section7 />*/}
      {/*<Section8 />*/}
      {/*<Section9 />*/}
      {/*<Section10 />*/}
      {/*<Section11 />*/}
      {/*<Section12 />*/}
    </AppLayout>
  )
}

export default IndexPage
