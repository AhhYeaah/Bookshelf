import React, { ReactNode } from 'react'

interface SidebarButtonSkeletonTextContainerProps {
  isOpen: boolean
  isMinified: boolean
  children: ReactNode
  isInDrawer: boolean
}

function unminifiedSize() {
  return ' w-full pl-3 '
}

function closedMinifiedSize() {
  return ' w-0 overflow-hidden opacity-0 '
}

function minifiedSize() {
  return ' w-[196px] px-3 '
}

function dealWithMinifiedSize(isOpen: boolean, isInDrawer: boolean) {
  // should remain oppened if it's on drawer
  if (!isInDrawer) {
    if (!isOpen) return closedMinifiedSize()
  }
  return minifiedSize()
}

function getContainerSizesBySidebarState(isMinified: boolean, isOpen: boolean, isInDrawer: boolean) {
  if (isMinified) return dealWithMinifiedSize(isOpen, isInDrawer)
  return unminifiedSize()
}

export function SidebarButtonSkeletonTextContainer({
  isOpen,
  children,
  isMinified,
  isInDrawer,
}: SidebarButtonSkeletonTextContainerProps) {
  return (
    <div
      className={
        'flex justify-between items-center transition-all whitespace-nowrap ' +
        getContainerSizesBySidebarState(isMinified, isOpen, isInDrawer)
      }
    >
      {children}
    </div>
  )
}
