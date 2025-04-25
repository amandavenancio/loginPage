import React, { useState } from "react";
import { LoginButton } from "./Buttons/LoginButton";
import { PasswordInput } from "./Inputs/PasswordInput";
import { UserInput } from "./Inputs/UserInput";
import { CreateUserButton } from "./Buttons/CreateUserButton";
import { senhaValida } from "../utils/PasswordValidator";
import { FeedbackMessage } from "./FeedbackMessage";

type UsuarioCadastrado = {
  nome: string;
  senha: string;
};

export const Login = () => {
  const [usuarios, setUsuarios] = useState<UsuarioCadastrado[]>([
    { nome: "admin", senha: "1234" },
    { nome: "nanda", senha: "abcd" }
  ]);

  const [tentativasPorUsuario, setTentativasPorUsuario] = useState<{ [key: string]: number }>({});
  const [bloqueados, setBloqueados] = useState<Set<string>>(new Set());

  const [usuario, setUsuario] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [mensagem, setMensagem] = useState("");

  const handleUsuario = (e: React.ChangeEvent<HTMLInputElement>) => setUsuario(e.target.value);
  const handleSenha = (e: React.ChangeEvent<HTMLInputElement>) => setSenha(e.target.value);

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
    setTentativasPorUsuario((prev) => ({ ...prev, [usuario]: 3 }));
  };

  const handleLogin = () => {

    if (bloqueados.has(usuario)) {
      setMensagem("❌ Usuário bloqueado. Você não pode mais tentar.");
      return;
    }

    const usuarioEncontrado = usuarios.find(
      (u) => u.nome === usuario && u.senha === senha
    );

    if (usuarioEncontrado) {
      setMensagem(`🎉 Bem-vindo(a), ${usuarioEncontrado.nome}!`);
      setTentativasPorUsuario((prev) => ({ ...prev, [usuario]: 3 }));
      setUsuario("");
      setSenha("");
    } else {
      const tentativasRestantes = tentativasPorUsuario[usuario] ?? 3;
      const novasTentativas = tentativasRestantes - 1;

      if (novasTentativas <= 0) {
        setBloqueados((prev) => new Set(prev).add(usuario));
        setMensagem("❌ Você errou 3 vezes. Usuário bloqueado.");
      } else {
        setMensagem(`❌ Senha incorreta. Você tem mais ${novasTentativas} tentativa${novasTentativas === 1 ? '' : 's'}.`);
      }

      setTentativasPorUsuario((prev) => ({ ...prev, [usuario]: novasTentativas }));
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

      {mensagem && <FeedbackMessage mensagem={mensagem} />}

    </div>
  );
};