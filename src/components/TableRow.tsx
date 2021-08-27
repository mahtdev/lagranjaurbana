import { Card } from '@material-ui/core'
import { styled } from '@material-ui/styles'

const TableRow = styled(Card)({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  borderRadius: '10px',
  cursor: 'pointer',
  '& > *': {
    flex: '1 1 0',
  },
  '& .pre': {
    whiteSpace: 'pre',
  },
})

export default TableRow
