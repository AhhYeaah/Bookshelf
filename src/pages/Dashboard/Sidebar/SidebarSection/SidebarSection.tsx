import React from 'react';

export function SidebarSection({ children, name }: { children?: any; name?: string }) {
  return (
    <div className="pt-3 px-8">
      <span className="text-sm">{name?.toUpperCase() ?? 'placeholder'}</span>
      <ul className="pt-3">{children}</ul>
    </div>
  );
}
