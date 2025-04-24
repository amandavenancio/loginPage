import React from "react";

type UserInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export const UserInput = ({value, onChange, placeholder} : UserInputProps) => (
  <input
    type="string"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  ></input>
)