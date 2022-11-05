import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../../../../utils/Text';

interface SidebarButtonProps {
  children?: React.ReactElement[] | React.ReactElement | undefined;
  to?: string;
  level?: number;
  name: string;
  icon?: any;
}

function thisButtonType(children: any) {
  if (children === undefined) return 'button';
  if (children.length !== undefined) return 'button-group';
  return 'single-button-button-group';
}

export function SidebarButton({ children, to = '/placeholder', level, name, icon }: SidebarButtonProps) {
  const [buttonOpen, changeButtonOpen] = useState(false);

  const sidebarLevel: number = level ?? 0;
  const sizes = sidebarLevel === 1 ? 'pl-8 pt-1' : `pl-5 pt-1`;
  const faAngle = buttonOpen ? faAngleDown : faAngleRight;

  //This breaks the single responsability principle.
  switch (thisButtonType(children)) {
    case 'button':
      return (
        <div className={sizes}>
          <Link to={to} className={'hover:text-sidebar-item-hover' + (buttonOpen ? ' text-sidebar-item-active' : '')}>
            <h3>{capitalizeFirstLetter(name) + ' ' + sidebarLevel} </h3>
          </Link>
        </div>
      );
      break;
    case 'button-group':
      return (
        <div className={sizes}>
          <div
            className={'flex justify-between' + (buttonOpen ? ' text-sidebar-item-active' : '')}
            onClick={() => changeButtonOpen(!buttonOpen)}
          >
            <div className={'hover:text-sidebar-item-hover'}>
              {icon && <FontAwesomeIcon icon={icon} className="mr-3" width={18}></FontAwesomeIcon>}
              <span>
                {capitalizeFirstLetter(name)} {icon ? '' : +sidebarLevel}
              </span>
            </div>
            <FontAwesomeIcon icon={faAngle} className="self-center">
              {' '}
            </FontAwesomeIcon>
          </div>
          <ul className="open:hidden" open={!buttonOpen}>
            {/* props cant be changed, so here I have to clone other sidebarButtons to dinamicaly implement level prop */}
            {children.map((children: any) => {
              return React.cloneElement(children, {
                level: sidebarLevel + 1,
              });
            })}
          </ul>
        </div>
      );
      break;
    case 'single-button-button-group':
      return (
        <div className={sizes}>
          <div
            className={
              ' flex justify-between hover:text-sidebar-item-hover' + (buttonOpen ? ' text-sidebar-item-active' : '')
            }
            onClick={() => changeButtonOpen(!buttonOpen)}
          >
            {capitalizeFirstLetter(name) + ' ' + sidebarLevel}
            <FontAwesomeIcon icon={faAngle} className="self-center"></FontAwesomeIcon>
          </div>
          <ul className="open:hidden" open={!buttonOpen}>
            {/* props cant be changed, so here I have to clone other sidebarButtons to dinamicaly implement level prop */}
            {React.cloneElement(children, {
              level: sidebarLevel + 1,
            })}
          </ul>
        </div>
      );
  }
}
