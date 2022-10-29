import React from 'react';

export function Sidebar({ open }: { open: boolean }) {
  return <div className="h-full bg-black open:w-[260px] w-[70px]" open={open}></div>;
}
