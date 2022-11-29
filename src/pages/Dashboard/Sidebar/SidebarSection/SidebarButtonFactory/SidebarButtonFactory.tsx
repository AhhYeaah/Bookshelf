import { faAngleDown, faAngleRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Children, ReactNode, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../../../../utils/Text';
interface SidebarButtonProps {
  level?: number;
  minify?: boolean;
  name: string;
  icon?: IconDefinition;
  children?: ReactNode | ReactNode[];
  to?: string;
}

export function SidebarButtonFactory({ children, icon, name, level = 0, minify = false, to }: SidebarButtonProps) {
  const [drawerState, changeDrawerState] = useState(false);

  const navigate = useNavigate();

  // First one has more space because of the icon.
  const sizes = level === 1 ? 'pl-8 pt-1' : `pl-5 pt-1`;

  const childrenArray = Children.toArray(children);
  const hasChildren = childrenArray.length > 0;
  const faAngle = drawerState ? faAngleDown : faAngleRight;
  let drawer = null;

  if (hasChildren) {
    drawer = (
      <div
        className={
          'overflow-hidden transition-all ' +
          (drawerState ? ' duration-500 max-h-[2000px] ' : 'duration-100 max-h-0  invisible')
        }
        aria-expanded={drawerState}
      >
        {/* props cant be changed, so here I have to clone other sidebarButtons to dinamicaly implement level prop */}
        {childrenArray.map((children: any) => {
          return React.cloneElement(children, {
            level: level + 1,
            minify,
          });
        })}
      </div>
    );
  }

  return (
    <div className={minify ? '' : sizes}>
      <button
        className={
          'w-full group ' +
          (drawerState ? 'text-sidebar-item-active ' : 'hover:text-sidebar-item-hover ') +
          (minify ? 'focus:bg-[#727cf5] focus:text-white ' + 'hover:bg-[#727cf5] hover:text-white ' : '')
        }
        onClick={
          minify
            ? () => {
                if (!hasChildren) {
                  navigate(to);
                }
              }
            : () => {
                if (hasChildren) {
                  changeDrawerState(!drawerState);
                } else {
                  navigate(to);
                }
              }
        }
        onMouseEnter={minify ? () => changeDrawerState(!drawerState) : undefined}
        onMouseLeave={minify ? () => changeDrawerState(!drawerState) : undefined}
        // making sure navigation is possible with keyboard only
        onFocus={minify ? () => changeDrawerState(!drawerState) : undefined}
        onBlur={minify ? () => changeDrawerState(!drawerState) : undefined}
      >
        <div className="flex flex-row ">
          {icon !== undefined ? (
            <div className={'flex-center flex-shrink-0 ' + (minify ? 'w-[70px] h-[56px] ' : '')}>
              <FontAwesomeIcon icon={icon} className={minify ? '' : 'mr-3 '} width={18}></FontAwesomeIcon>
            </div>
          ) : null}

          <div
            className={
              'flex justify-between items-center ' +
              (minify ? 'w-[190px] flex-shrink-0 px-4 z-40 hidden ' : 'w-full ') +
              (minify
                ? 'group-focus:flex group-focus:bg-[#727cf5]  group-focus:text-white ' +
                  'group-hover:flex group-hover:bg-[#727cf5] group-hover:text-white '
                : '')
            }
          >
            <span>{capitalizeFirstLetter(name)}</span>
            {hasChildren ? <FontAwesomeIcon icon={faAngle} className="self-center"></FontAwesomeIcon> : null}
          </div>
        </div>
      </button>
      {drawer}
    </div>
  );
}
