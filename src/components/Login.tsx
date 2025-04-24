import React, { use, useState } from "react";
import { LoginButton } from "./LoginButton";
import { PasswordInput } from "./PasswordInput";
import { UserInput } from "./UserInput";

export const Login = () => {
  const [usuario, setUsuario] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const handleUsuario = (e: React.ChangeEvent<HTMLInputElement>) => (
    setUsuario(e.target.value)
  );

  const handleSenha = (e: React.ChangeEvent<HTMLInputElement>) => (
    setSenha(e.target.value)
  );
  
  return ( 
  <div>
    <UserInput
    value={usuario}
    placeholder="Digite seu usuário"
    onChange={handleUsuario}
    />

    <PasswordInput
    value={senha}
    onChange={handleSenha}
    placeholder="Digite sua senha"
    />

    <LoginButton
      onClick={ }
    >
      Entrar
    </LoginButton>
  </div>
  )
}