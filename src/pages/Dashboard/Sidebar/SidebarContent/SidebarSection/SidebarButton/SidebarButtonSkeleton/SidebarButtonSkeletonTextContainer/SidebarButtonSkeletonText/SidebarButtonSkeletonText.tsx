import React from 'react'

import { capitalizeFirstLetter } from '../../../../../../../../../utils/Text'
import { SidebarButtonSkeletonTextArrow } from './SidebarButtonSkeletonTextArrow/SidebarButtonSkeletonTextArrow'

import './SidebarButtonSkeletonText.css'

interface SidebarButtonSkeletonTextProps {
  name: string
  hasMultipleChildren: boolean
  isOpen: boolean
}
export function SidebarButtonSkeletonText({ name, hasMultipleChildren, isOpen }: SidebarButtonSkeletonTextProps) {
  return (
    <>
      <span className="appearing">{capitalizeFirstLetter(name)}</span>
      <span className="appearing">
        {hasMultipleChildren && <SidebarButtonSkeletonTextArrow isOpen={isOpen}></SidebarButtonSkeletonTextArrow>}
      </span>
    </>
  )
}
