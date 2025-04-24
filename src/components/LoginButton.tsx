import React from "react";

export type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export const LoginButton = ({ onClick, children, disabled }: ButtonProps) => (
  <button className="text-fuchsia-50 bg-pink-500 border-fuchsia-50"
    onClick={onClick} 
    disabled={disabled}>
    {children}
  </button>
);