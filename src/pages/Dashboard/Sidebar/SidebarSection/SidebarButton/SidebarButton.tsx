import React from 'react';
import { Link } from 'react-router-dom';

export function SidebarButton({ children, to }: any) {
  return <Link to={to}>{children}</Link>;
}
