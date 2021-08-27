import { Rating } from '@material-ui/core'
import { compose, spacing, styled, typography } from '@material-ui/system'

const BazarRating = styled(Rating)(compose(spacing, typography))

BazarRating.defaultProps = {
  fontSize: '1.25rem',
}

export default BazarRating
