import React, { useEffect, useState } from 'react';
import { Outlet, useHref } from 'react-router-dom';

import mapaUrl from '../../assets/mapa.jpg';
import lighterMapUrl from '../../assets/mapa2.jpg';
import { Logo } from '../../components/Logo/Logo';

enum AuthPages {
  LOGIN = 'login',
  CADASTRO = 'cadastro',
}

export function LoginPage() {
  const [darkMode, changeLightMode] = useState(true);
  const [currentForm, changeCurrentForm] = useState<AuthPages>(AuthPages.LOGIN);

  useEffect(() => {
    console.log('b');
  });
  // console.log(currentForm);

  return (
    // background, yep it was necessary.
    <div className="h-screen w-screen flex-center">
      <div className="h-screen w-screen absolute top-0 -z-10 overflow-hidden">
        <div className={`absolute top-0 h-full w-full -z-10 bg-black ${darkMode ? 'opacity-40' : 'opacity-30'}`}></div>
        <img
          src={darkMode ? mapaUrl : lighterMapUrl}
          alt="Background image"
          className="-z-20 w-full h-full relative scale-105 blur-lg  overflow-hidden"
        />
      </div>
      <div className="z-20 bg-white grid grid-cols-5 flex-col container xl:max-w-screen-xl mx-4 h-2/3 rounded-md">
        <div className="py-10 flex flex-col  col-span-2 col-start-1">
          <Logo width={120} />
          <Outlet context={[changeCurrentForm]}></Outlet>
        </div>
        <div className="col-start-3 col-span-3">
          <img src={mapaUrl} className="w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
}
