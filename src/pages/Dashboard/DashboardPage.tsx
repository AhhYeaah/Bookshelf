import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { PrimaryButton } from '../../components/PrimaryButton/PrimaryButton';
import { Sidebar } from './Sidebar/Sidebar';

export function DashboardPage() {
  const [sidebarState, toggleSidebar] = useState(false);

  return (
    <div className="grid grid-cols-closed-sidebar open:grid-cols-open-sidebar h-screen" open={sidebarState}>
      <Sidebar open={sidebarState}></Sidebar>

      <div className="bg-slate-400">
        <PrimaryButton
          onclick={() => {
            toggleSidebar(!sidebarState);
            console.log(sidebarState);
          }}
        >
          toggle sidebar
        </PrimaryButton>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
