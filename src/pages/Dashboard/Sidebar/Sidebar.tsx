import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../../components/Logo/Logo';
import { SidebarButton } from './SidebarSection/SidebarButton/SidebarButton';
import { SidebarSection } from './SidebarSection/SidebarSection';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';

export function Sidebar({ open }: { open: boolean }) {
  return (
    <div
      className="h-full transition-all duration-500 text-sidebar-item bg-sidebar-bg open:w-[260px] w-[70px] shrink-0"
      open={open}
    >
      {/* Logo */}
      <Link to={'/dashboard'}>
        <div className="h-16 flex-center">
          <Logo dark={true} className="h-[27px]" minified={!open} />
        </div>
      </Link>

      {/* Sidebar Body */}
      <SidebarSection name="navigation">
        <SidebarButton name="Home" icon={faHouse}>
          <SidebarButton name="Level">
            <SidebarButton name="Level"></SidebarButton>
            <SidebarButton name="Level">
              <SidebarButton name="Level">
                <SidebarButton name="Level"></SidebarButton>
                <SidebarButton name="Level"></SidebarButton>
                <SidebarButton name="Level">
                  <SidebarButton name="Level"></SidebarButton>
                </SidebarButton>
              </SidebarButton>
            </SidebarButton>
          </SidebarButton>
          <SidebarButton name="Level"></SidebarButton>
        </SidebarButton>
        <SidebarButton name="Eventos" icon={faCalendar}>
          <SidebarButton name="Level">
            <SidebarButton name="Level"></SidebarButton>
          </SidebarButton>
          <SidebarButton name="Level"></SidebarButton>
        </SidebarButton>
      </SidebarSection>

      <SidebarSection name="apps">
        <SidebarButton name="Viagens" icon={faCar}>
          <SidebarButton name="Level">
            <SidebarButton name="Level"></SidebarButton>
            <SidebarButton name="Level">
              <SidebarButton name="Level">
                <SidebarButton name="Level"></SidebarButton>
                <SidebarButton name="Level"></SidebarButton>
                <SidebarButton name="Level">
                  <SidebarButton name="Level"></SidebarButton>
                </SidebarButton>
              </SidebarButton>
            </SidebarButton>
          </SidebarButton>
          <SidebarButton name="Level"></SidebarButton>
        </SidebarButton>
      </SidebarSection>
    </div>
  );
}
