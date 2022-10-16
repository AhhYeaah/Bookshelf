import React, { useEffect, useRef, useState } from 'react';
import { faBars, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../../../components/PrimaryButton/PrimaryButton';
import './NavbarButtonGroup.css';

export function NavbarButtonGroup() {
  const [isDrawerOpen, openDrawer] = useState(false);
  const [canDrawerBeOpenned, setCanDrawerBeOppened] = useState(false);

  const drawerState = canDrawerBeOpenned && isDrawerOpen;

  const button = useRef(null);
  const observer = new IntersectionObserver(([entry]) => setCanDrawerBeOppened(entry.isIntersecting));

  useEffect(() => {
    observer.observe(button.current!);

    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="flex items-end lg:hidden " ref={button}>
        <button onClick={() => openDrawer(!isDrawerOpen)}>
          <FontAwesomeIcon icon={faBars} className="text-4xl"></FontAwesomeIcon>
        </button>
      </div>

      <div
        className="navbar-openable flex-col absolute top-20 left-0 w-full lg:flex lg:flex-row lg:relative lg:top-0 lg:w-auto lg:visible"
        open={drawerState}
        aria-expanded={drawerState}
      >
        <div className="navbar-openable-child-container">
          <Link to={'/'} className="navbar-button">
            Home
            <FontAwesomeIcon icon={faAngleRight} className="lg:hidden"></FontAwesomeIcon>
          </Link>
        </div>

        <div className="navbar-openable-child-container">
          <a href="https://github.com/AhhYeaah/Bookshelf" className="navbar-button">
            Github
            <FontAwesomeIcon icon={faAngleRight} className="lg:hidden"></FontAwesomeIcon>
          </a>
        </div>

        <div className="navbar-openable-child-container">
          <Link to={'/thanks'} className="navbar-button">
            Buy me a coffee
            <FontAwesomeIcon icon={faAngleRight} className="lg:hidden"></FontAwesomeIcon>
          </Link>
        </div>

        <div className="navbar-openable-child-container">
          <Link
            to={'/auth/login'}
            className={`navbar-button lg:px-0 ${drawerState ? 'text-blue-600 hover:text-blue-400' : ''}`}
          >
            {drawerState ? 'Logar' : <PrimaryButton>Login</PrimaryButton>}
            <FontAwesomeIcon icon={faAngleRight} className="lg:hidden"></FontAwesomeIcon>
          </Link>
        </div>
      </div>
    </>
  );
}
