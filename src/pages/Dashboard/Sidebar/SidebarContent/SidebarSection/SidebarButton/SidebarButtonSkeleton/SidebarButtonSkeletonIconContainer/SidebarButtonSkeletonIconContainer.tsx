import React from 'react'

import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../../../../../../../../components/Icon/Icon'

interface SidebarButtonSkeletonIconProps {
  isMinified: boolean
  icon?: IconDefinition
}

export function SidebarButtonSkeletonIconContainer({ isMinified, icon }: SidebarButtonSkeletonIconProps) {
  if (isMinified && icon === undefined) return null
  return (
    <div className={'flex-center shrink-0 w-full ' + (isMinified ? 'min-w-[72px]' : ' max-w-[20px]')}>
      <Icon icon={icon} width={18}></Icon>
    </div>
  )
}
