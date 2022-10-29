import React from 'react';

export function PrimaryButton(props: { children: any; onclick: () => any; className?: string }) {
  return (
    <button
      className={`bg-blue-600 rounded-md text-white hover:bg-blue-500 px-5 py-2 transition-colors duration-300 ${props.className}`}
      onClick={props.onclick}
    >
      {props.children}
    </button>
  );
}
