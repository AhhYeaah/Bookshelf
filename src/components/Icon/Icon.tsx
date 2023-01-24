import React, { memo } from 'react'

import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IconProps {
  icon?: IconDefinition
  width?: number
  className?: string
}

function IconComponent({ icon, width, className }: IconProps) {
  if (!icon) return null
  return <FontAwesomeIcon icon={icon} width={width} className={className} />
}

export const Icon = memo(IconComponent)
