import React from 'react';

interface InputTextProps {
  name: string;
  placeholder: string;
}

const InputText: React.FC<InputTextProps> = ({ name, placeholder }) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="w-full border-0 bg-transparent border-b-2 pt-2 px-2 rounded-md border-light-accent dark:border-dark-accent text-light-primary dark:text-dark-primary text-xl 
      focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent 
      focus:outline-none focus:border-light-accent dark:focus:border-dark-accent"
      required
    />
  );
};

export default InputText;