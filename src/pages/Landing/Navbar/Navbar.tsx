import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../../components/PrimaryButton/PrimaryButton';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';

export function Navbar() {
  const [isDrawerOpen, openDrawer] = useState(false);
  const [isDrawerOpenable, turnDrawerOpenable] = useState(false);

  return (
    <header className="flex justify-center sticky top-0  w-full bg-slate-200">
      <section className="max-h-20 mx-auto p-4 px-7 container flex justify-between">
        <Link to={'/'} className="w-32">
          <img src="https://mrpg.app/assets/img/logo.png" />
        </Link>

        <div className="lg:hidden flex items-end">
          <button onClick={() => openDrawer(!isDrawerOpen)}>
            <FontAwesomeIcon icon={faBars} className="text-4xl "></FontAwesomeIcon>
          </button>
        </div>

        <div
          className="flex absolute invisible openable h-0 lg:flex-row lg:visible lg:h-full w-auto lg:relative"
          open={isDrawerOpen}
        >
          <Link className="menu-button" to={'/'}>
            Home
          </Link>
          <a href="https://github.com/AhhYeaah/Bookshelf" className="menu-button">
            Github
          </a>
          <Link className="menu-button" to={'/thanks'}>
            Buy me a coffee
          </Link>
          <Link className="menu-button" to={'/auth/login'}>
            <PrimaryButton>Login</PrimaryButton>
          </Link>
        </div>
      </section>
    </header>
  );
}
