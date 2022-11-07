import React from 'react';

export function SidebarSection({ children, name }: { children?: any; name?: string }) {
  return (
    <div className="pt-3 px-6">
      <span className="text-sm">{name?.toUpperCase() ?? 'placeholder'}</span>
      <ul className="pt-1">{children}</ul>
    </div>
  );
}
