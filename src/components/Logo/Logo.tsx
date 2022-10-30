import React from 'react';

import logoSrc from '../../assets/logo.png';
import miniLogoSrc from '../../assets/logo-pequeno.png';

interface LogoProps {
  width?: number;
  className?: string;
  minified?: boolean;
}

export function Logo({ width, className, minified }: LogoProps) {
  return <img className={className} width={width} src={minified ?? false ? miniLogoSrc : logoSrc} alt="Logo do site" />;
}
