import Footer from '@component/landing/Footer'
import Section1 from '@component/landing/Section1'
import Section2 from '@component/landing/Section2'
import Section3 from '@component/landing/Section3'
import Section4 from '@component/landing/Section4'
import { Box } from '@material-ui/system'

const IndexPage = () => {
  return (
    <Box id="top" overflow="hidden" bgcolor="background.paper">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {/* <Section5 /> */}
      <Footer />
      {/* <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer /> */}
    </Box>
  )
}

export default IndexPage
