import React from 'react';

interface TextInputProps {
  name: string;
  type: string;
  id?: string;
  placeholder?: string;
}

export function TextInput({ name, type, id, placeholder }: TextInputProps) {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

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
