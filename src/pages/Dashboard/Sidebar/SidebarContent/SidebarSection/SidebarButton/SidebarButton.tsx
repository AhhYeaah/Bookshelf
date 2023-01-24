import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import React, { Children, ReactNode, useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { SidebarButtonDrawer } from './SidebarButtonDrawer/SidebarButtonDrawer'

import { SidebarButtonSkeleton } from './SidebarButtonSkeleton/SidebarButtonSkeleton'

export interface SidebarButtonSkeletonProps {
  isMinified?: boolean
  icon?: IconDefinition
  name: string
  children?: ReactNode | ReactNode[]
  link?: string
  buttonDepth?: number
}

function getTextColor(openState: boolean) {
  if (openState) {
    return ' text-white '
  }
  return ' hover:text-white focus-visible:text-white '
}

function changeButtonHeightWhenMinified(isMinified: boolean) {
  if (isMinified) {
    return ' h-[56px] '
  }
  return ' py-2 last:pb-1 '
}

function assertNoInvalidArguments(
  hasMultipleChildren: boolean,
  buttonDepth: number,
  link?: string,
  icon?: IconDefinition
) {
  if (hasMultipleChildren && link) throw new Error('A SidebarButton with children should not redirect')
  if (icon && buttonDepth > 0) throw new Error("SidebarButton's inside drawers should not have icons")
  // if (!hasMultipleChildren && !link) throw new Error('A SidebarButton with no children needs a link to redirect')
}

function SidebarButton({
  children,
  icon,
  name,
  link,
  isMinified = false,
  buttonDepth = 0,
}: SidebarButtonSkeletonProps) {
  const [openState, setOpenState] = useState(false)

  const navigate = useNavigate()

  const childrenArray = Children.toArray(children)
  const hasMultipleChildren = childrenArray.length > 0

  assertNoInvalidArguments(hasMultipleChildren, buttonDepth, link, icon)

  return (
    <div>
      <button
        className={
          'flex items-center flex-shrink-0 flex-wrap w-full ' +
          changeButtonHeightWhenMinified(isMinified) +
          getTextColor(openState)
        }
        onClick={() => {
          if (hasMultipleChildren) {
            setOpenState(!openState)
          } else {
            navigate(link!)
          }
        }}
      >
        <SidebarButtonSkeleton
          isInDrawer={buttonDepth > 0}
          name={name}
          hasMultipleChildren={hasMultipleChildren}
          isOpen={openState}
          isMinified={isMinified}
          icon={icon}
        ></SidebarButtonSkeleton>
      </button>
      <SidebarButtonDrawer drawerState={openState} isMinified={isMinified} buttonDepth={buttonDepth}>
        {children}
      </SidebarButtonDrawer>
    </div>
  )
}
export default memo(SidebarButton)
