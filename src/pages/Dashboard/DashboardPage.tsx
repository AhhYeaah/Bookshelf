import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Landing/Navbar/Navbar';
import { Sidebar } from './Sidebar/Sidebar';

export function DashboardPage() {
  // Yeah, ikr. Its weird how the dashboard has to maintain the sidebar state.
  // But thats exactly how it's supposed to be done. State lifting
  // https://reactjs.org/docs/lifting-state-up.html
  const [sidebarState, toggleSidebar] = useState(false);

  return (
    <div className="flex flex-row h-screen w-screen">
      <Sidebar open={sidebarState}></Sidebar>
      <div className="flex flex-col w-full h-full">
        <div className="h-16 flex justify-between items-center px-5 shrink-0">
          <button onClick={() => toggleSidebar(!sidebarState)} className="flex items-end">
            <FontAwesomeIcon icon={faBars} className="text-4xl"></FontAwesomeIcon>
          </button>
        </div>

        <Outlet></Outlet>
      </div>
    </div>
  );
}
