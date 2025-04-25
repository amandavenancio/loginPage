import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

type PasswordInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export const PasswordInput = ({ value, onChange, placeholder }: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  return (
    <div className="relative">
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 pr-10" // pr-10 para dar espaço para o ícone
        type={isPasswordVisible ? "text" : "password"} // Alterna entre texto e senha
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label="Campo para digitar sua senha"
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-2.5"
        aria-label={isPasswordVisible ? "Ocultar senha" : "Mostrar senha"}
      >
        {isPasswordVisible ? <FiEyeOff size={20} /> : <FiEye size={20} />} {/* Ícone de olho */}
      </button>
    </div>
  );
};