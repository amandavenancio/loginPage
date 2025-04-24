import React from "react";

export type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export const loginButton = ({ onClick, children, disabled }: ButtonProps) => (
  <button  
    onClick={onClick} 
    disabled={disabled}>
    {children}
  </button>
);