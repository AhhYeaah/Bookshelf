import React from 'react';
import { Outlet } from 'react-router-dom';

import mapaUrl from '../../assets/mapa.jpg';

export function LoginPage() {
  return (
    // background, yep it was necessary.
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-screen w-screen absolute top-0 -z-10 overflow-hidden">
        <div className="absolute top-0 h-full w-full -z-10 bg-black opacity-40"></div>
        <img
          src={mapaUrl}
          alt="Background image"
          className="-z-20 w-full h-full relative scale-105 blur-lg  overflow-hidden"
        />
      </div>
      <Outlet></Outlet>
    </div>
  );
}
