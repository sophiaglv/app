'use client';
import Image from "next/image";
import "./page.css";
import { useLogin } from '../hooks/useLogin';

export default function Login() {
  const { form, handleChange, handleLogin } = useLogin();
  return (
    <main className="login">
      <div>
        <Image
          src="/logo.png"
          alt="AquaBalance Logo"
          width={150}
          height={150}
          className="logo"
        />
      </div>
      <div className="login-content">
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
          <div className="login-input">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite aqui..."
              value={form.email}
              onChange={handleChange}
            />

            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              name="senha"
              id="senha"
              placeholder="Digite aqui..."
              value={form.senha}
              onChange={handleChange}
            />
          </div>
          <div className="login-button">
            <button type="submit" className="button">Entrar</button>
          </div>
        </form>
      </div>
    </main>
  );
}