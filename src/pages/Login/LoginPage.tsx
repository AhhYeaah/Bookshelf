import React from 'react';
import { Outlet } from 'react-router-dom';

export function LoginPage() {
  return (
    <section className="flex justify-center items-center lg:h-screen">
      {/* blue circles */}
      <div className="absolute w-3/5 h-4/5 bg-blue-100 rounded-full flex justify-center items-center z-0">
        <div className="absolute w-3/5 h-4/5 bg-blue-200 rounded-full z-10"></div>
      </div>
      <Outlet></Outlet>
    </section>
  );
}
