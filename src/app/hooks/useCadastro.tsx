'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import api from '../lib/api';

export function useRegistro() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    cpfCnpj: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, cpfCnpj, password, confirmPassword } = form;

    if (password !== confirmPassword) {
      Swal.fire('Erro', 'As senhas não coincidem.', 'error');
      return;
    }

    api.post('/users/register', { name, email, cpfCnpj, password })
      .then(() => {
        Swal.fire('Sucesso', 'Usuário cadastrado com sucesso!', 'success')
          .then(() => router.push('/'));
      })
      .catch(() => Swal.fire('Erro', 'Não foi possível cadastrar o usuário.', 'error'));
  };

  return { form, handleChange, handleRegister };
}
