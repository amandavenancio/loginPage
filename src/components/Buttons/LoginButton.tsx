import React from "react";

export type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export const LoginButton = ({ onClick, children, disabled }: ButtonProps) => (
  <button  
    className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 disabled:opacity-50"
    aria-label="Fazer login"
    onClick={onClick} 
    disabled={disabled}>
    {children}
  </button>
);