import React, { useState } from "react";
import { LoginButton } from "./LoginButton";
import { PasswordInput } from "./PasswordInput";
import { UserInput } from "./UserInput";
import { CreateUserButton } from "./CreateUserButton";

type UsuarioCadastrado = {
  nome: string;
  senha: string;
};

export const Login = () => {
  const [usuario, setUsuario] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [mensagem, setMensagem] = useState("");
  const [usuarios, setUsuarios] = useState<UsuarioCadastrado[]>([]);

  const handleUsuario = (e: React.ChangeEvent<HTMLInputElement>) => (
    setUsuario(e.target.value)
  );

  const handleSenha = (e: React.ChangeEvent<HTMLInputElement>) => (
    setSenha(e.target.value)
  );

  const senhaValida = (senha: string): boolean => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,10}$/;
    return regex.test(senha);
  };

  const handleCreateUser = () => {
    const usuarioExistente = usuarios.find((u) => u.nome === usuario);

    if (usuarioExistente) {
      setMensagem("⚠️ Usuário já existe. Escolha outro nome.");
      return;
    }

    if (!senhaValida(senha)) {
      setMensagem("⚠️ A senha deve ter de 8 a 10 caracteres, com pelo menos uma letra maiúscula, um número e um caractere especial.");
      return;
    }

    const novoUsuario: UsuarioCadastrado = { nome: usuario, senha };
    setUsuarios([...usuarios, novoUsuario]);
    setMensagem("✅ Usuário cadastrado com sucesso!");
    setUsuario("");
    setSenha("");
  };

  const handleLogin = () => {
    const usuarioEncontrado = usuarios.find(
      (u) => u.nome === usuario && u.senha === senha
    );

    if (usuarioEncontrado) {
      setMensagem(`🎉 Bem-vindo(a), ${usuarioEncontrado.nome}!`);
    } else {
      setMensagem("❌ Usuário ou senha incorretos. Verifique os dados digitados.");
    }
  };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-md flex flex-col gap-4 items-center">
        <h1 className="text-2xl font-bold text-center mb-6 text-pink-600">Login</h1>

        <div className="mb-4">
          <UserInput
            value={usuario}
            onChange={handleUsuario}
            placeholder="Digite seu usuário"
          />
        </div>

        <div className="mb-4">
          <PasswordInput
            value={senha}
            onChange={handleSenha}
            placeholder="Digite sua senha"
          />
        </div>

        <div className="flex justify-between gap-2 mt-4">
          <CreateUserButton
            onClick={handleCreateUser}
          >Criar Usuário
          </CreateUserButton>

          <LoginButton
            onClick={handleLogin}
          >Entrar
          </LoginButton>
        </div>

        {mensagem && (
          <p className="mt-4 text-sm text-center text-rose-600">{mensagem}</p>
        )}
      </div>
  );
};