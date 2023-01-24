import React, {memo} from 'react'

import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../../../../../../../../../../components/Icon/Icon'

function getArrowIconByButtonState(isOpen: boolean) {
  return isOpen ? faAngleDown : faAngleRight
}

export function SidebarButtonSkeletonTextArrow({ isOpen }: { isOpen: boolean }) {
  return <Icon icon={getArrowIconByButtonState(isOpen)} width={18}></Icon>
}
