import React from 'react'
import { faCalendar, faHouse } from '@fortawesome/free-solid-svg-icons'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import './Sidebar.css'
import { SidebarLogo } from './SidebarLogo/SidebarLogo'
import { SidebarContent } from './SidebarContent/SidebarContent'
import { SidebarSection } from './SidebarContent/SidebarSection/SidebarSection'
import SidebarButton from './SidebarContent/SidebarSection/SidebarButton/SidebarButton'

function getSidebarContent(open: boolean, isMobile: boolean) {
  return (
    <SidebarContent isMinified={!open && !isMobile}>
      <SidebarSection name="navigation">
        <SidebarButton name="Home" icon={faHouse}>
          <SidebarButton name="Level 1">
            <SidebarButton name="Level 2"></SidebarButton>
            <SidebarButton name="Level 1">
              <SidebarButton name="Level 1"></SidebarButton>
            </SidebarButton>
            <SidebarButton name="Level 1">
              <SidebarButton name="Level 1"></SidebarButton>
            </SidebarButton>
            <SidebarButton name="Level 1">
              <SidebarButton name="Level 1"></SidebarButton>
            </SidebarButton>
            <SidebarButton name="Level 1">
              <SidebarButton name="Level 1"></SidebarButton>
            </SidebarButton>
            <SidebarButton name="Level 1">
              <SidebarButton name="Level 1"></SidebarButton>
            </SidebarButton>
            <SidebarButton name="Level 1">
              <SidebarButton name="Level 1"></SidebarButton>
            </SidebarButton>
            <SidebarButton name="Level 1">
              <SidebarButton name="Level 1"></SidebarButton>
            </SidebarButton>
          </SidebarButton>
          <SidebarButton name="Level 1">
            <SidebarButton name="Level 1"></SidebarButton>
            <SidebarButton name="Level 1">
              <SidebarButton name="Level 1"></SidebarButton>
            </SidebarButton>
          </SidebarButton>
        </SidebarButton>
        <SidebarButton name="Level 1" icon={faHouse}>
          <SidebarButton name="Level 1">
            <SidebarButton name="Level 1">
              <SidebarButton name="Level 1"></SidebarButton>
            </SidebarButton>
          </SidebarButton>
        </SidebarButton>
        <SidebarButton name="Eventos" icon={faCalendar} link="/index"></SidebarButton>
      </SidebarSection>
      <SidebarSection name="navigation">
        <SidebarButton name="Home" icon={faHouse}>
          <SidebarButton name="Level 1"></SidebarButton>
        </SidebarButton>
        <SidebarButton name="Level 1" icon={faHouse}>
          <SidebarButton name="Level 1">
            <SidebarButton name="Level 1">
              <SidebarButton name="Level 1"></SidebarButton>
            </SidebarButton>
          </SidebarButton>
        </SidebarButton>
        <SidebarButton name="Eventos" icon={faCalendar} link="/index"></SidebarButton>
      </SidebarSection>
      <SidebarSection name="navigation">
        <SidebarButton name="Home" icon={faHouse}>
          <SidebarButton name="Level 1"></SidebarButton>
        </SidebarButton>
        <SidebarButton name="Level 1" icon={faHouse}>
          <SidebarButton name="Level 1">
            <SidebarButton name="Level 1">
              <SidebarButton name="Level 1"></SidebarButton>
            </SidebarButton>
          </SidebarButton>
        </SidebarButton>
        <SidebarButton name="Eventos" icon={faCalendar} link="/index"></SidebarButton>
      </SidebarSection>
      <SidebarSection name="navigation">
        <SidebarButton name="Home" icon={faHouse}>
          <SidebarButton name="Level 1"></SidebarButton>
        </SidebarButton>
        <SidebarButton name="Level 1" icon={faHouse}>
          <SidebarButton name="Level 1">
            <SidebarButton name="Level 1">
              <SidebarButton name="Level 1"></SidebarButton>
            </SidebarButton>
          </SidebarButton>
        </SidebarButton>
        <SidebarButton name="Eventos" icon={faCalendar} link="/index"></SidebarButton>
      </SidebarSection>
      <SidebarSection name="navigation">
        <SidebarButton name="Home" icon={faHouse}>
          <SidebarButton name="Level 1"></SidebarButton>
        </SidebarButton>
        <SidebarButton name="Level 1" icon={faHouse}>
          <SidebarButton name="Level 1">
            <SidebarButton name="Level 1">
              <SidebarButton name="Level 1"></SidebarButton>
            </SidebarButton>
          </SidebarButton>
        </SidebarButton>
        <SidebarButton name="Eventos" icon={faCalendar} link="/index"></SidebarButton>
      </SidebarSection>
      <SidebarSection name="navigation">
        <SidebarButton name="Home" icon={faHouse}>
          <SidebarButton name="Level 1"></SidebarButton>
        </SidebarButton>
        <SidebarButton name="Level 1" icon={faHouse}>
          <SidebarButton name="Level 1">
            <SidebarButton name="Level 1">
              <SidebarButton name="Level 1"></SidebarButton>
            </SidebarButton>
          </SidebarButton>
        </SidebarButton>
        <SidebarButton name="Eventos" icon={faCalendar} link="/index"></SidebarButton>
      </SidebarSection>
      <SidebarSection name="navigation">
        <SidebarButton name="Home" icon={faHouse}>
          <SidebarButton name="Level 1"></SidebarButton>
        </SidebarButton>
        <SidebarButton name="Level 1" icon={faHouse}>
          <SidebarButton name="Level 1">
            <SidebarButton name="Level 1">
              <SidebarButton name="Level 1"></SidebarButton>
            </SidebarButton>
          </SidebarButton>
        </SidebarButton>
        <SidebarButton name="Eventos" icon={faCalendar} link="/index"></SidebarButton>
      </SidebarSection>
      <SidebarSection name="navigation">
        <SidebarButton name="Home" icon={faHouse}>
          <SidebarButton name="Level 1"></SidebarButton>
        </SidebarButton>
        <SidebarButton name="Level 1" icon={faHouse}>
          <SidebarButton name="Level 1">
            <SidebarButton name="Level 1">
              <SidebarButton name="Level 1"></SidebarButton>
            </SidebarButton>
          </SidebarButton>
        </SidebarButton>
        <SidebarButton name="Eventos" icon={faCalendar} link="/index"></SidebarButton>
      </SidebarSection>
      <SidebarSection name="navigation">
        <SidebarButton name="Home" icon={faHouse}>
          <SidebarButton name="Level 1"></SidebarButton>
        </SidebarButton>
        <SidebarButton name="Level 1" icon={faHouse}>
          <SidebarButton name="Level 1">
            <SidebarButton name="Level 1">
              <SidebarButton name="Level 1"></SidebarButton>
            </SidebarButton>
          </SidebarButton>
        </SidebarButton>
        <SidebarButton name="Eventos" icon={faCalendar} link="/index"></SidebarButton>
      </SidebarSection>
      <SidebarSection name="navigation">
        <SidebarButton name="Home" icon={faHouse}>
          <SidebarButton name="Level 1"></SidebarButton>
        </SidebarButton>
        <SidebarButton name="Level 1" icon={faHouse}>
          <SidebarButton name="Level 1">
            <SidebarButton name="Level 1">
              <SidebarButton name="Level 1"></SidebarButton>
            </SidebarButton>
          </SidebarButton>
        </SidebarButton>
        <SidebarButton name="Eventos" icon={faCalendar} link="/index"></SidebarButton>
      </SidebarSection>
      <SidebarSection name="navigation">
        <SidebarButton name="Home" icon={faHouse}>
          <SidebarButton name="Level 1"></SidebarButton>
        </SidebarButton>
        <SidebarButton name="Level 1" icon={faHouse}>
          <SidebarButton name="Level 1">
            <SidebarButton name="Level 1">
              <SidebarButton name="Level 1"></SidebarButton>
            </SidebarButton>
          </SidebarButton>
        </SidebarButton>
        <SidebarButton name="Eventos" icon={faCalendar} link="/index"></SidebarButton>
      </SidebarSection>
    </SidebarContent>
  )
}

interface SidebarProps {
  isOpen: boolean
  isMobile: boolean
}

export function Sidebar({ isOpen, isMobile }: SidebarProps) {
  const content = (
    <>
      <SidebarLogo isOpen={isOpen} />
      {getSidebarContent(isOpen, isMobile)}
    </>
  )

  if (isMobile) {
    return (
      <SimpleBar
        aria-expanded={isOpen}
        className={'sidebar absolute-sidebar ' + (isOpen ? 'arrising-animation' : 'gone-animation')}
      >
        {content}
      </SimpleBar>
    )
  }

  if (isOpen) {
    return (
      <SimpleBar aria-expanded={isOpen} className={'sidebar fixed-sidebar opening-animation'}>
        {content}
      </SimpleBar>
    )
  } else {
    return (
      <div aria-expanded={isOpen} className={'sidebar fixed-sidebar closing-animation'}>
        {content}
      </div>
    )
  }
}
