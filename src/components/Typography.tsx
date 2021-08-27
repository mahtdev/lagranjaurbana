import { Box, BoxProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import React from 'react'

const useStyles = makeStyles(() => ({
  root: {
    textTransform: (props: any) => props.textTransform || 'none',
  },
  ellipsis: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}))

type Props = {
  ellipsis?: boolean
  textTransform?:
    | 'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'initial'
    | 'inherit'
}

export const H1: React.FC<BoxProps & Props> = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  const classes = useStyles({ textTransform })

  return (
    <Box
      className={clsx({
        [className || '']: true,
        [classes.root]: true,
        [classes.ellipsis]: ellipsis,
      })}
      component="h1"
      mb={0}
      mt={0}
      fontSize="30px"
      fontWeight="700"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </Box>
  )
}

export const H2: React.FC<BoxProps & Props> = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  const classes = useStyles({ textTransform })

  return (
    <Box
      className={clsx({
        [className || '']: true,
        [classes.root]: true,
        [classes.ellipsis]: ellipsis,
      })}
      component="h2"
      mb={0}
      mt={0}
      fontSize="25px"
      fontWeight="700"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </Box>
  )
}

export const H3: React.FC<BoxProps & Props> = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  const classes = useStyles({ textTransform })

  return (
    <Box
      className={clsx({
        [className || '']: true,
        [classes.root]: true,
        [classes.ellipsis]: ellipsis,
      })}
      component="h3"
      mb={0}
      mt={0}
      fontSize="20px"
      fontWeight="700"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </Box>
  )
}

export const H4: React.FC<BoxProps & Props> = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  const classes = useStyles({ textTransform })

  return (
    <Box
      className={clsx({
        [className || '']: true,
        [classes.root]: true,
        [classes.ellipsis]: ellipsis,
      })}
      component="h4"
      mb={0}
      mt={0}
      fontSize="17px"
      fontWeight="600"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </Box>
  )
}

export const H5: React.FC<BoxProps & Props> = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  const classes = useStyles({ textTransform })

  return (
    <Box
      className={clsx({
        [className || '']: true,
        [classes.root]: true,
        [classes.ellipsis]: ellipsis,
      })}
      component="h5"
      mb={0}
      mt={0}
      fontSize="16px"
      fontWeight="600"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </Box>
  )
}

export const H6: React.FC<BoxProps & Props> = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  const classes = useStyles({ textTransform })

  return (
    <Box
      className={clsx({
        [className || '']: true,
        [classes.root]: true,
        [classes.ellipsis]: ellipsis,
      })}
      component="h6"
      mb={0}
      mt={0}
      fontSize="14px"
      fontWeight="600"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </Box>
  )
}

export const Paragraph: React.FC<BoxProps & Props> = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  const classes = useStyles({ textTransform })

  return (
    <Box
      className={clsx({
        [className || '']: true,
        [classes.root]: true,
        [classes.ellipsis]: ellipsis,
      })}
      component="p"
      mb={0}
      mt={0}
      fontSize="14px"
      {...props}
    >
      {children}
    </Box>
  )
}

export const Small: React.FC<BoxProps & Props> = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  const classes = useStyles({ textTransform })

  return (
    <Box
      className={clsx({
        [className || '']: true,
        [classes.root]: true,
        [classes.ellipsis]: ellipsis,
      })}
      component="small"
      fontSize="12px"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </Box>
  )
}

export const Span: React.FC<BoxProps & Props> = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  const classes = useStyles({ textTransform })

  return (
    <Box
      className={clsx({
        [className || '']: true,
        [classes.root]: true,
        [classes.ellipsis]: ellipsis,
      })}
      component="span"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </Box>
  )
}

export const Tiny: React.FC<BoxProps & Props> = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  const classes = useStyles({ textTransform })

  return (
    <Box
      className={clsx({
        [className || '']: true,
        [classes.root]: true,
        [classes.ellipsis]: ellipsis,
      })}
      component="small"
      fontSize="10px"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </Box>
  )
}
