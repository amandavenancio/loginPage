import React, { use, useState } from "react";
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
    <div>
      <UserInput
        value={usuario}
        onChange={handleUsuario}
        placeholder="Digite seu usuário"
      />

      <PasswordInput
        value={senha}
        onChange={handleSenha}
        placeholder="Digite sua senha"
      />

      <div style={{ marginTop: "10px" }}>
        <CreateUserButton onClick={handleCreateUser}>
          Criar Usuário
        </CreateUserButton>

        <LoginButton onClick={handleLogin}>
          Entrar
        </LoginButton>
      </div>
      {mensagem && <p style={{ marginTop: "10px", color: "#D6336C" }}>{mensagem}</p>}
    </div>
  )
}