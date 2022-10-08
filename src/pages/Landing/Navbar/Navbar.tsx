import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
export function Navbar() {
  return (
    <header className="center flex justify-center sticky top-0  w-full bg-slate-200">
      <section className="max-h-20 p-4 container flex justify-between">
        <Link to={'/'} className="w-32">
          <img src="https://mrpg.app/assets/img/logo.png" />
        </Link>
        <div className="flex flex-row h-full">
          <Link className="menu-button" to={'/'}>
            Home
          </Link>
          <a href="https://github.com/AhhYeaah/Bookshelf" className="menu-button">
            Github
          </a>
          <Link className="menu-button" to={'/thanks'}>
            Buy me a coffee
          </Link>
          <Link className="login-button menu-button" to={'/auth/login'}>
            Login
          </Link>
        </div>
      </section>
    </header>
  );
}