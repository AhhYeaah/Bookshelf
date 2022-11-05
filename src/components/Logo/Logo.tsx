import React from 'react';
import logoClaroSrc from '../../assets/logo.png';
import logoDarkSrc from '../../assets/logo-claro.png';
import miniLogoSrc from '../../assets/logo-pequeno.png';

interface LogoProps {
  width?: number;
  className?: string;
  minified?: boolean;
  dark?: boolean;
}

export function Logo({ width, className, minified, dark }: LogoProps) {
  let logosrc;

  if (minified) {
    logosrc = miniLogoSrc;
  } else {
    if (dark) {
      logosrc = logoDarkSrc;
    } else {
      logosrc = logoClaroSrc;
    }
  }
  return <img className={className} width={width} src={logosrc} alt="Logo do site" />;
}
