import './Navbar.css'

import React from 'react'
import { Link } from 'react-router-dom'

import { NavbarButtonGroup } from './NavbarButtonGroup/NavbarButtonGroup'
import { Logo } from '../../../components/Logo/Logo'

export function Navbar() {
  return (
    <header className="flex justify-center sticky top-0 w-full bg-white">
      <section className="max-h-20 mx-auto p-4 px-7 container flex justify-between">
        <Link to={'/'} className="w-32">
          <Logo />
        </Link>
        <NavbarButtonGroup></NavbarButtonGroup>
      </section>
    </header>
  )
}
