import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Icon } from '../../components/Icon/Icon'
import {
  getDocumentWidth,
  isWithinViewport,
  viewPort,
  ViewPortListener,
  viewPortToClass,
} from '../../components/ViewPortListener/ViewPortListener'
import { Sidebar } from './Sidebar/Sidebar'

export function DashboardPage() {
  // Yeah, ikr. Its weird how the dashboard has to maintain the sidebar state.
  // But thats exactly how it's supposed to be done. State lifting
  // https://reactjs.org/docs/lifting-state-up.html
  const [sidebarState, toggleSidebar] = useState(true)
  const [isMobile, toogleMobileMode] = useState(isWithinViewport(getDocumentWidth(), viewPort.sm))

  return (
    <div className={'flex flex-row w-min-screen items-stretch ' + (sidebarState ? 'h-screen' : 'min-h-screen')}>
      <Sidebar isMobile={isMobile} isOpen={sidebarState}></Sidebar>
      {/* content */}
      <div className={'flex flex-col w-full h-min-screen'}>
        {isMobile && (
          <div
            className={
              'w-full h-full  bg-[#313a46] absolute bottom-0 left-0 z-10 transition-all duration-500  ' +
              (sidebarState ? 'visible opacity-60' : 'invisible opacity-0')
            }
            onClick={() => toggleSidebar(false)}
          />
        )}

        {/* navbar */}
        <div className="h-16 flex-between px-5 shrink-0">
          <button onClick={() => toggleSidebar(!sidebarState)} className="flex items-end">
            <Icon icon={faBars} className="text-4xl"></Icon>
          </button>
        </div>

        <div className="h-full">
          <Outlet></Outlet>
        </div>
      </div>
      <ViewPortListener desiredPort={viewPortToClass.sm} changeViewPort={toogleMobileMode} />
    </div>
  )
}
