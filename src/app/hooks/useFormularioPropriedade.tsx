'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import api from '../lib/api';
import { PropriedadeForm } from '../../types/PropriedadeForm'; 

export function useFormularioPropriedade(id?: string) {
  const router = useRouter();
  const [form, setForm] = useState<PropriedadeForm>({
    nome: '',
    pais: '',
    rua: '',
    estado: '',
    cidade: '',
    numero: '',
  });
  const isEditMode = Boolean(id);

  useEffect(() => {
    if (isEditMode) {
      api.get<PropriedadeForm>(`/propriedade/${id}`)
        .then(response => setForm(response.data))
        .catch(() => {
          Swal.fire('Erro', 'propriedade não encontrado', 'error').then(() => router.push('/propriedade'));
        });
    }
  }, [id, isEditMode, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(currentForm => ({ ...currentForm, [name]: value }));
  };

  const handleCancel = () => {
    router.push('/propriedade');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const propriedadeParaEnviar = { ...form, numero: Number(form.numero) };
    const method = isEditMode ? 'put' : 'post';
    const url = isEditMode ? `/propriedade/${id}` : '/propriedade/';
    const successMessage = `propriedade ${isEditMode ? 'atualizado' : 'cadastrado'} com sucesso!`;

    api[method](url, propriedadeParaEnviar)
      .then(() => Swal.fire('Sucesso', successMessage, 'success'))
      .then(() => router.push('/propriedade'))
      .catch((error) => {
        console.error("Falha ao salvar o propriedade:", error);
        Swal.fire('Erro', 'Não foi possível salvar o propriedade.', 'error');
      });
  };

  return { form, isEditMode, handleChange, handleSubmit, handleCancel };
}