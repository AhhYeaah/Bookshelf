import React from 'react'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { SidebarButtonSkeletonIconContainer } from './SidebarButtonSkeletonIconContainer/SidebarButtonSkeletonIconContainer'
import { SidebarButtonSkeletonText } from './SidebarButtonSkeletonTextContainer/SidebarButtonSkeletonText/SidebarButtonSkeletonText'
import { SidebarButtonSkeletonTextContainer } from './SidebarButtonSkeletonTextContainer/SidebarButtonSkeletonTextContainer'

export interface SidebarButtonSkeletonProps {
  hasMultipleChildren?: boolean
  isMinified: boolean
  icon?: IconDefinition
  name: string
  isOpen?: boolean
  isInDrawer: boolean
}

function getBackgroundColor(isMinified: boolean, isOpen: boolean) {
  if (isMinified) {
    if (isOpen) return ' bg-[#727cf5] '
    return ' hover:bg-[#727cf5] focus-visible:bg-[#727cf5] '
  } else {
    return ''
  }
}

export function SidebarButtonSkeleton({
  hasMultipleChildren = false,
  isMinified,
  icon,
  name,
  isInDrawer,
  isOpen = false,
}: SidebarButtonSkeletonProps) {
  return (
    <div className={'flex flex-row basis-full h-full ' + getBackgroundColor(isMinified, isOpen)}>
      {/* icon */}
      <SidebarButtonSkeletonIconContainer isMinified={isMinified} icon={icon}></SidebarButtonSkeletonIconContainer>
      <SidebarButtonSkeletonTextContainer isInDrawer={isInDrawer} isOpen={isOpen} isMinified={isMinified}>
        {/* This way, the container doesnt have to bother receving name
         * or props that it will not use */}
        <SidebarButtonSkeletonText
          name={name}
          hasMultipleChildren={hasMultipleChildren}
          isOpen={isOpen}
        ></SidebarButtonSkeletonText>
      </SidebarButtonSkeletonTextContainer>
    </div>
  )
}
