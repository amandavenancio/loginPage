import React from "react";

type PasswordInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export const PasswordInput = ({value, onChange, placeholder} : PasswordInputProps) => (
  <input
    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
    type="password"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  ></input>
)