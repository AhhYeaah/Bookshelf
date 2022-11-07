import React, { Children } from 'react';

export function SidebarSection({ children, name, minify = false }: any) {
  const childrenArray = Children.toArray(children);

  if (minify === true) {
    return (
      <div className="pt-3 px-6 select-none">
        <span className="text-sm">{name?.toUpperCase() ?? 'placeholder'}</span>
        <div className="pt-1">
          {/* props cant be changed, so here I have to clone other sidebarButtons to dinamicaly implement level prop */}
          {childrenArray.map((children: any) => {
            return React.cloneElement(children, { minify });
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {childrenArray.map((children: any) => {
          return React.cloneElement(children, { minify });
        })}
      </div>
    );
  }
}
