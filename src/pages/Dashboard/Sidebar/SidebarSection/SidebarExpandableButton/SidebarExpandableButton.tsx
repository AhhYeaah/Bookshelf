import { faAngleRight, faAngleDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Children, ReactNode, useState } from 'react';
import { capitalizeFirstLetter } from '../../../../../utils/Text';

interface SidebarButtonProps {
  level?: number;
  minify?: boolean;
  name: string;
  icon?: IconDefinition;
  children?: ReactNode | ReactNode[];
}

export function SidebarExpandableButton({ children, level = 0, minify, name, icon }: SidebarButtonProps) {
  const [buttonOpen, changeButtonOpen] = useState(false);

  // First one has more space because of the icon.
  const sizes = level === 1 ? 'pl-8 pt-1' : `pl-5 pt-1`;

  const childrenArray = Children.toArray(children);
  const faAngle = buttonOpen ? faAngleDown : faAngleRight;

  let element;
  if (minify === true) {
    element = (
      <div className={sizes}>
        <button
          className={
            ' flex justify-between w-full focus:ring ' +
            (buttonOpen ? 'text-sidebar-item-active ' : 'hover:text-sidebar-item-hover')
          }
          onClick={() => changeButtonOpen(!buttonOpen)}
        >
          <div>
            {icon != null && <FontAwesomeIcon icon={icon} className="mr-3" width={18}></FontAwesomeIcon>}
            <span>
              {capitalizeFirstLetter(name)} {icon != null ? '' : +level}
            </span>
          </div>
          <FontAwesomeIcon icon={faAngle} className="self-center"></FontAwesomeIcon>
        </button>
        <ul
          className={
            'overflow-hidden transition-all ' +
            (buttonOpen ? ' duration-500 max-h-[2000px] ' : 'duration-100 max-h-0  invisible')
          }
          aria-expanded={buttonOpen}
        >
          {/* props cant be changed, so here I have to clone other sidebarButtons to dinamicaly implement level prop */}
          {childrenArray.map((children: any) => {
            return React.cloneElement(children, {
              level: level + 1,
              minify,
            });
          })}
        </ul>
      </div>
    );
  } else {
    element = (
      <div className="group" tabIndex={0}>
        <div
          className={
            'flex flex-row items-center ' + 'group-hover:text-sidebar-item-active group-focus:text-sidebar-item-active'
          }
        >
          <div
            className={'flex-center h-14 w-[70px] flex-shrink-0 ' + 'group-hover:bg-[#727cf5] group-focus:bg-[#727cf5]'}
          >
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
      </div>
    );
  }

  return element;
}
