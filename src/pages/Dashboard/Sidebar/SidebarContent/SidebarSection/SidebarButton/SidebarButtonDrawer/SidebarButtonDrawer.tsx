import React, { Children, ReactNode, memo } from 'react'

import './SidebarButtonDrawer.css'

interface SidebarButtonDrawerProps {
  children?: ReactNode | ReactNode[]
  drawerState: boolean
  isMinified: boolean
  buttonDepth: number
}

export function SidebarButtonDrawerComponent({
  children,
  drawerState,
  isMinified,
  buttonDepth,
}: SidebarButtonDrawerProps) {
  if (!isMinified) {
    return (
      <div
        className={
          'overflow-hidden transition-all pl-5 ' +
          (drawerState ? ' duration-1000 max-h-[1000px] ' : 'duration-300 max-h-0 invisible')
        }
        aria-expanded={drawerState}
      >
        {drawerState &&
          Children.map(children, (children: any) => {
            return React.cloneElement(children, {
              isMinified,
              buttonDepth: buttonDepth + 1,
            })
          })}
      </div>
    )
  } else {
    if (drawerState) {
      return (
        <div
          className={
            ' overflow-y-clip overflow-x-visible drawer-opening-animation bg-[#37414e] ' +
            (buttonDepth === 0 ? ' ml-[72px] ' : 'ml-[196px]') +
            (drawerState ? ' w-[196px] ' : ' h-0 w-0 ')
          }
          aria-expanded={drawerState}
        >
          {Children.map(children, (children: any) => {
            return React.cloneElement(children, {
              isMinified,
              buttonDepth: buttonDepth + 1,
            })
          })}
        </div>
      )
    }
    return null
  }
}

export const SidebarButtonDrawer = memo(SidebarButtonDrawerComponent)
