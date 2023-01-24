import React, { useState, useRef, useEffect, MutableRefObject } from 'react'

export enum viewPort {
  'sm' = 640,
  'md' = 768,
  'lg' = 1024,
  'xl' = 1280,
  '2xl' = 1536,
}

// Im not sure, but i think that putting a listener to the viewport seems like a bad idea
// So im using the native mediaquery present in the tailwind classes
// That probably makes no sense, but Its the best solution that i can think with limited info
export enum viewPortToClass {
  'sm' = 'sm:hidden',
  'md' = 'md:hidden',
  'lg' = 'lg:hidden',
  'xl' = 'xl:hidden',
  '2xl' = '2xl:hidden',
}

interface ViewPortListenerProps {
  desiredPort: viewPortToClass
  changeViewPort: (value: boolean) => void
}

export function getDocumentWidth() {
  return document.body.clientWidth
}

export function isWithinViewport(width: number, viewPort: viewPort) {
  return width < viewPort
}

export function ViewPortListener({ desiredPort, changeViewPort }: ViewPortListenerProps) {
  const observer = new IntersectionObserver(([entry]) => changeViewPort(entry.isIntersecting))
  const listenerDomObj = useRef(null)

  useEffect(() => {
    observer.observe(listenerDomObj.current!)

    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect()
    }
  }, [])

  return <div className={'h-0 w-0 ' + desiredPort} ref={listenerDomObj}></div>
}
