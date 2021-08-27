import { SvgIcon } from '@material-ui/core'
import React from 'react'

export interface BazarIconProps {}

const BazarIcon: React.FC<BazarIconProps> = () => {
  return (
    <SvgIcon htmlColor="primary" viewBox="0 0 24 24">
      <img src="/assets/images/icons/bag.svg" alt="" />
    </SvgIcon>
  )
}

export default BazarIcon
