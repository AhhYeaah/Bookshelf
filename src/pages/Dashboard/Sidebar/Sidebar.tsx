import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../../components/Logo/Logo';
import { SidebarButton } from './SidebarSection/SidebarButton/SidebarButton';
import { SidebarSection } from './SidebarSection/SidebarSection';
import { faCalendar, faHouse, faCar } from '@fortawesome/free-solid-svg-icons';
import { SidebarExpandableButton } from './SidebarSection/SidebarExpandableButton/SidebarExpandableButton';

export function Sidebar({ open }: { open: boolean }) {
  return (
    <div
      className={
        'h-full z-20 transition-all duration-500 text-sidebar-item bg-sidebar-bg open:w-[260px] w-[70px] shrink-0 ' +
        (open ? 'overflow-hidden' : 'overflow-visible')
      }
      open={open}
    >
      {/* Logo */}
      <Link to={'/dashboard'}>
        <div className="h-16 flex-center">
          <Logo dark={true} className="h-[27px]" minified={!open} />
        </div>
      </Link>

      {/* Sidebar Body */}
      <SidebarSection name="navigation" minify={open}>
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
        <SidebarButton name="Eventos" icon={faCalendar} minify={open}>
          <SidebarButton name="Level">
            <SidebarButton name="Level"></SidebarButton>
          </SidebarButton>
          <SidebarButton name="Level"></SidebarButton>
        </SidebarButton>
      </SidebarSection>

      <SidebarSection name="apps" minify={open}>
        <SidebarExpandableButton name="Viagens" icon={faCar}>
          <SidebarExpandableButton name="Level">
            <SidebarButton name="Level"></SidebarButton>
            <SidebarExpandableButton name="Level">
              <SidebarExpandableButton name="Level">
                <SidebarButton name="Level"></SidebarButton>
                <SidebarButton name="Level"></SidebarButton>
                <SidebarExpandableButton name="Level">
                  <SidebarButton name="Level"></SidebarButton>
                </SidebarExpandableButton>
              </SidebarExpandableButton>
            </SidebarExpandableButton>
          </SidebarExpandableButton>
          <SidebarButton name="Level"></SidebarButton>
        </SidebarExpandableButton>
      </SidebarSection>
    </div>
  );
}
