'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import api from '../lib/api';

export function useCadastro() {
  const router = useRouter();

  const [form, setForm] = useState({
    nome: '',
    email: '',
    cpfCnpj: '',
    senha: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, email, cpfCnpj, senha } = form;

    api.post('/usuario/cadastro', { nome, email, cpfCnpj, senha })
      .then(() => {
        Swal.fire('Sucesso', 'Usuário cadastrado com sucesso!', 'success')
          .then(() => router.push('/login'));
      })
      .catch(() => Swal.fire('Erro', 'Não foi possível cadastrar o usuário.', 'error'));
  };

  return { form, handleChange, handleRegister };
}
