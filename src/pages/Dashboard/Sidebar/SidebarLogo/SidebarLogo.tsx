import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../../../components/Logo/Logo'

export function SidebarLogo({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="sticky top-0 bg-sidebar-bg">
      <Link to={'/dashboard'}>
        <div className="h-16 flex-center">
          <Logo dark={true} className="h-[27px]" minified={!isOpen} />
        </div>
      </Link>
    </div>
  )
}
