'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import api from '../lib/api';

export function useLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', senha: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, senha } = form;

    api.post<{ email: string }>('/usuario/auth', { email, senha })
      .then(response => {
        localStorage.setItem('logged', 'true');
        localStorage.setItem('email', response.data.email);
        router.push('/propriedades');
      })
      .catch(() => Swal.fire('Erro', 'Usuário ou senha incorretos!', 'error'));
  };

  return { form, handleChange, handleLogin };
}
