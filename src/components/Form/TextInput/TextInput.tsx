import React from 'react';
import { capitalizeFirstLetter } from '../../../utils/Text';

interface TextInputProps {
  name: string;
  type: string;
  id?: string;
  placeholder?: string;
}

export function TextInput({ name, type, id, placeholder }: TextInputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name.toLowerCase()}>{capitalizeFirstLetter(name)}</label>
      <input
        type={type}
        name={name.toLowerCase()}
        placeholder={placeholder}
        id={id}
        className="border placeholder:italic placeholder:text-slate-400"
      />
    </div>
  );
}
