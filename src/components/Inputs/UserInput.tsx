import React from "react";

type UserInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export const UserInput = ({value, onChange, placeholder} : UserInputProps) => (
  <input
    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    aria-label="Campo para digitar seu usuário"
  ></input>
)