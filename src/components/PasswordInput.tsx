import React from "react";

type PasswordInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export const PasswordInput = ({value, onChange, placeholder} : PasswordInputProps) => (
  <input
    type="string"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  ></input>
)