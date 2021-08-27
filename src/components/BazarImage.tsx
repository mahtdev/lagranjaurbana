import { compose, display, spacing, styled } from '@material-ui/system'

const BazarImage = styled('img')(compose(spacing, display))

BazarImage.defaultProps = {
  display: 'block',
}

export default BazarImage

// compose,
// borders,
// display,
// flexbox,
// palette,
// positions,
// shadows,
// sizing,
// spacing,
// typography
