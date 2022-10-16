import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { NavbarButtonGroup } from './NavbarButtonGroup/NavbarButtonGroup';

export function Navbar() {
  return (
    <header className="flex justify-center sticky top-0  w-full bg-slate-200">
      <section className="max-h-20 mx-auto p-4 px-7 container flex justify-between">
        <Link to={'/'} className="w-32">
          <img src="https://mrpg.app/assets/img/logo.png" />
        </Link>
        <NavbarButtonGroup></NavbarButtonGroup>
      </section>
    </header>
  );
}
