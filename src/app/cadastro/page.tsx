'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useRegistro } from '@/app/hooks/useCadastro';

import "./page.css";

export default function Cadastro() {
  const { form, handleChange, handleRegister } = useRegistro();

  return (
    <main className="cadastro">
      <div>
        <Image
          src="/logo.png"
          alt="AquaBalance Logo"
          width={150}
          height={150}
          className="logo"
        />
      </div>
      <div className="cadastro-content">
        <h1>Cadastro</h1>

        <form onSubmit={handleRegister}>
          <div className='cadastro-input'>
            <label>Nome</label>
            <input
              type="text"
              name="name"
              placeholder="Digite aqui..."
              value={form.name}
              onChange={handleChange}
            />

            <label>E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Digite aqui..."
              value={form.email}
              onChange={handleChange}
            />
            <label>CPF/CNPJ</label>
            <input
              type="text"
              name="cpfCnpj"
              placeholder="Digite aqui..."
              value={form.cpfCnpj}
              onChange={handleChange}
            />

            <label>Crie uma senha</label>
            <input
              type="password"
              name="password"
              placeholder="Digite aqui..."
              value={form.password}
              onChange={handleChange}
            />
            <label>Confirme sua senha</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Digite aqui..."
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="cadastro-termos">
            
            <p>Declaro que li, compreendi e aceito integrantes os</p>
            <a href="/termos">Termos de Uso</a>
          </div>

          <div className="cadastro-button">
            <button type="submit" className="button">Cadastre-se</button>
          </div>
        </form>
      </div>
    </main >
  );
}
