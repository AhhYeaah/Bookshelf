import React from 'react';

export function SidebarSection({ children, name }: { children?: any; name?: string }) {
  return (
    <div className="py-3 px-8">
      <span>{name?.toUpperCase() ?? 'placeholder'}</span>

      <ul className="py-3">{children}</ul>
    </div>
  );
}
