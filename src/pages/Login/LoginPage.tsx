import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import mapaUrl from '../../assets/mapa.jpg';
import lighterMapUrl from '../../assets/mapa2.jpg';

export function LoginPage() {
  const [darkMode, changeLightMode] = useState(false);
  return (
    // background, yep it was necessary.
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-screen w-screen absolute top-0 -z-10 overflow-hidden">
        <div className={`absolute top-0 h-full w-full -z-10 bg-black ${darkMode ? 'opacity-40' : 'opacity-30'}`}></div>
        <img
          src={darkMode ? mapaUrl : lighterMapUrl}
          alt="Background image"
          className="-z-20 w-full h-full relative scale-105 blur-lg  overflow-hidden"
        />
      </div>
      <div className="z-20 bg-white grid grid-cols-5 col flex-col container xl:max-w-screen-xl mx-4 h-2/3 rounded-md">
        <div>
          <img src="https://mrpg.app/assets/img/logo.png" width={120} />
          {/* oof, almost lost my streak */}
          <Outlet></Outlet>
        </div>
        <div className="col-start-3 col-span-3">
          <img src={mapaUrl} className="w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
}
