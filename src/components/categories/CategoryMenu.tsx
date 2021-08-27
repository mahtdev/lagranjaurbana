import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect, useRef, useState } from 'react'
import CategoryMenuCard from './CategoryMenuCard'

export interface CategoryMenuProps {
  open?: boolean
  children: React.ReactElement
}

const useStyles = makeStyles(() => ({
  root: (props: any) => ({
    position: 'relative',

    '& .cursor-pointer': {
      cursor: 'pointer',
    },
    '& .dropdown-icon': {
      marginLeft: '0.25rem',
      transition: 'all 250ms ease-in-out',
      transform: `rotate(${props.open ? '90deg' : '0deg'})`,
    },
  }),
}))

const CategoryMenu: React.FC<CategoryMenuProps> = ({
  open: isOpen = false,
  children,
}) => {
  const [open, setOpen] = useState(isOpen)
  const popoverRef = useRef(open)
  popoverRef.current = open

  const classes = useStyles({ open })

  const toggleMenu = (e: React.MouseEvent<Document, MouseEvent>) => {
    e.stopPropagation()
    if (!isOpen) setOpen((open) => !open)
  }

  const handleDocumentClick = () => {
    if (popoverRef.current && !isOpen) setOpen(false)
  }

  useEffect(() => {
    window.addEventListener('click', handleDocumentClick)
    return () => {
      window.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  return (
    <Box className={classes.root}>
      {React.cloneElement(children, {
        open,
        className: `${children.props.className} cursor-pointer`,
        onClick: toggleMenu,
      })}
      <CategoryMenuCard open={open} />
    </Box>
  )
}

export default CategoryMenu
