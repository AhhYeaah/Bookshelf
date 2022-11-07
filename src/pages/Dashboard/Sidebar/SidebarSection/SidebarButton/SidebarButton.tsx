import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../../../../utils/Text';

interface SidebarButtonProps {
  to?: string;
  level?: number;
  minify?: boolean;
  name: string;
  icon?: IconDefinition;
}

export function SidebarButton({ to = '/placeholder', level = 0, minify, name, icon }: SidebarButtonProps) {
  // First one has more space because of the icon.
  const sizes = level === 1 ? 'pl-8 pt-1' : `pl-5 pt-1`;

  let element;

  if (minify === true) {
    element = (
      <div className={sizes}>
        <div className={'flex justify-between '}>
          <div>
            {icon != null && <FontAwesomeIcon icon={icon} className="mr-3 " width={18}></FontAwesomeIcon>}
            <span>
              {capitalizeFirstLetter(name)} {icon !== null ? '' : +level}
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    element = (
      <div className="flex flex-row items-center ">
        <div className={'flex-center h-14 w-[70px] flex-shrink-0 group-hover:bg-[#727cf5] group-focus:bg-[#727cf5]'}>
          {icon != null && <FontAwesomeIcon icon={icon} width={18}></FontAwesomeIcon>}
        </div>
        <div
          className={
            'hidden w-[190px] flex-shrink-0 h-[56px] px-4 items-center ' +
            'group-focus:bg-[#727cf5] group-focus:flex ' +
            'group-hover:bg-[#727cf5] group-hover:flex'
          }
        >
          {name}
        </div>
      </div>
    );
  }

  return (
    <Link to={to} className="hover:text-sidebar-item-active group focus:text-white">
      {element}
    </Link>
  );
}
//
