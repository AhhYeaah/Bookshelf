import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../../components/Logo/Logo';
import { SidebarButton } from './SidebarSection/SidebarButton/SidebarButton';
import { SidebarButtonOption } from './SidebarSection/SidebarButton/SidebarButtonOption/SidebarButtonOption';
import { SidebarSection } from './SidebarSection/SidebarSection';

export function Sidebar({ open }: { open: boolean }) {
  return (
    <div className="h-full transition-all duration-500 bg-slate-300 open:w-[260px] w-[70px] shrink-0" open={open}>
      {/* Logo */}
      <Link to={'/dashboard'}>
        <div className="h-16 flex-center">
          <Logo className="h-[27px]" minified={!open} />
        </div>
      </Link>
      {/* Sidebar Body */}
      <SidebarSection name="navigation">
        <SidebarButton>
          <SidebarButtonOption> DAs</SidebarButtonOption>

          <SidebarButtonOption>AAA</SidebarButtonOption>
        </SidebarButton>
      </SidebarSection>
    </div>
  );
}
