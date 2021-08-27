import { Chip } from '@material-ui/core'
import {
  bgcolor,
  compose,
  display,
  flexbox,
  positions,
  sizing,
  spacing,
  styled,
  typography,
} from '@material-ui/system'

const BazarChip = styled(Chip)(
  compose(spacing, positions, typography, sizing, bgcolor, flexbox, display)
)

// BazarChip.defaultProps = {
//   overflow: "unset",
// };

export default BazarChip
