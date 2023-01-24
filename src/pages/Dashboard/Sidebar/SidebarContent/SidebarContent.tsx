import React, { Children, ReactNode, memo, useEffect, Profiler } from 'react'
import uuid from 'uuid-random'

interface SidebarContentProps {
  children?: ReactNode | ReactNode[]
  isMinified: boolean
}

export function SidebarContentComponent({ children, isMinified }: SidebarContentProps) {
  return (
    <div>
      {Children.map(children, (children: any) => {
        return React.cloneElement(children, { isMinified })
      })}
    </div>
  )
}

export const SidebarContent = memo(SidebarContentComponent)
