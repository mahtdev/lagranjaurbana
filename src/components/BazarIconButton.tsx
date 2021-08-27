import { IconButton } from '@material-ui/core'
import {
  bgcolor,
  border,
  compose,
  positions,
  sizing,
  spacing,
  styled,
  typography,
} from '@material-ui/system'

const BazarIconButton = styled(IconButton)(
  compose(spacing, positions, typography, sizing, border, bgcolor)
)

export default BazarIconButton
