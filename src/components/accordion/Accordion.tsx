import { makeStyles } from '@material-ui/styles'
import React, {
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react'

export interface AccordionProps {
  expanded?: boolean
  children: ReactElement[] | any
}

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'height 250ms ease-in-out',
    height: (props: any) => (props.open ? props.parentHeight : props.headerHeight),
  },
}))

const Accordion: React.FC<AccordionProps> = ({ expanded = false, children }) => {
  const [open, setOpen] = useState(expanded)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [parentHeight, setParentHeight] = useState(0)

  const classes = useStyles({ open, headerHeight, parentHeight })
  const ref = useRef<any>(null)

  const toggle = () => {
    setOpen(!open)
  }

  useEffect(() => {
    let parent = ref.current

    if (parent) {
      setHeaderHeight(parent.children[0].scrollHeight)
      setParentHeight(parent.scrollHeight)
    }
  }, [ref.current])

  const modifiedChildren = Children.map(children, (child, ind) => {
    if (ind === 0) return cloneElement(child, { open, onClick: toggle })
    else return child
  })

  return (
    <div className={classes.root} ref={ref}>
      {modifiedChildren}
    </div>
  )
}

Accordion.defaultProps = {
  expanded: false,
}

export default Accordion
