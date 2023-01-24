import React, { Children, ReactNode, memo } from 'react'
import uuid from 'uuid-random'

export interface SidebarSectionProps {
  children: ReactNode | ReactNode[]
  name: string
  isMinified?: boolean
}

function hideSectionName(isMinified = false) {
  return isMinified ? ' hidden  ' : ' '
}

function changeSectionContainerSize(isMinified = false) {
  return isMinified ? ' first:mt-[0px] mt-[28px] ' : ' pt-3 px-6 '
}

function changeSectionContentSize(isMinified = false) {
  return isMinified ? ' ' : ' pt-1 pl-3 '
}

export function SidebarSectionComponent({ children, name, isMinified }: SidebarSectionProps) {
  // props cant be changed directly.
  const processedChildren = Children.map(children, (children: any) => {
    return React.cloneElement(children, { isMinified, key: uuid() })
  })

  return (
    <div className={'select-none ' + changeSectionContainerSize(isMinified)}>
      <span className={'text-sm font-bold ' + hideSectionName(isMinified)}>{name?.toUpperCase() ?? 'placeholder'}</span>
      <div className={changeSectionContentSize(isMinified)}>{processedChildren}</div>
    </div>
  )
}

export const SidebarSection = memo(SidebarSectionComponent)
