'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import api from '../lib/api';
import { PlantacaoForm } from '@/types/plantacaoForm';
import { Propriedade } from '@/types/propriedade';

export function useFormPlantacao(id?: string) {
  const router = useRouter();
  const isEditMode = Boolean(id);

  const [form, setForm] = useState({
    cultura: '',
    descricao: '',
    tamanho: '',
    umidadeIdeal: '',
    temperaturaIdeal: '',
    idPropriedade: '',
  });

  const [propriedades, setPropriedades] = useState<Propriedade[]>([]);

  useEffect(() => {
    // 🔹 Busca todas as propriedades
    api.get<Propriedade[]>('/propriedades/')
      .then(response => setPropriedades(response.data))
      .catch(error => {
        console.error('Erro ao buscar propriedades:', error);
        Swal.fire('Erro!', 'Não foi possível carregar a lista de propriedades.', 'error');
      });

    // 🔹 Se estiver editando, busca os dados da plantação
    if (isEditMode) {
      api.get<PlantacaoForm>(`/plantacao/${id}`)
        .then(response => {
          const data = response.data;

          // Verifica se o retorno está vazio
          if (!data || Object.keys(data).length === 0) {
            Swal.fire('Aviso!', 'Nenhuma plantação encontrada.', 'warning')
              .then(() => router.push('/plantacoes'));
            return;
          }

          setForm({
            cultura: data.cultura || '',
            descricao: data.descricao || '',
            tamanho: String(data.tamanho ?? ''),
            umidadeIdeal: String(data.umidadeIdeal ?? ''),
            temperaturaIdeal: String(data.temperaturaIdeal ?? ''),
            idPropriedade: String(data.idPropriedade?.id ?? ''),
          });
        })
        .catch(error => {
          console.error(`Erro ao buscar a plantação ${id}:`, error);
          Swal.fire('Erro!', 'Não foi possível carregar os dados para edição.', 'error');
          router.push('/plantacoes');
        });
    }
  }, [id, isEditMode, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const idPropriedadeNumerico = parseInt(form.idPropriedade, 10);
    if (!idPropriedadeNumerico) {
      Swal.fire('Atenção!', 'Você precisa selecionar uma propriedade.', 'warning');
      return;
    }

    const dadosParaEnviar = {
      cultura: form.cultura,
      propriedade: { id: idPropriedadeNumerico },
      tamanho: parseInt(form.tamanho, 10) || 0,
      descricao: form.descricao,
      umidadeIdeal: parseInt(form.umidadeIdeal, 10) || 0,
      temperaturaIdeal: parseInt(form.temperaturaIdeal, 10) || 0,
    };

    const request = isEditMode
      ? api.put(`/plantacoes/${id}`, dadosParaEnviar)
      : api.post('/plantacoes', dadosParaEnviar);

    request
      .then(() => {
        Swal.fire({
          title: 'Sucesso!',
          text: `Plantação ${isEditMode ? 'atualizada' : 'cadastrada'} com sucesso!`,
          icon: 'success',
          timer: 1800,
          showConfirmButton: false,
        });
        setTimeout(() => router.push('/plantacoes'), 1500);
      })
      .catch(error => {
        console.error('Erro ao salvar a plantação:', error);
        const errorMessage = error.response?.data?.message || 'Não foi possível salvar o item.';
        Swal.fire('Erro!', errorMessage, 'error');
      });
  };

  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter esta ação!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      api.delete(`/plantacoes/${id}`)
        .then(() => {
          Swal.fire('Excluído!', 'A plantação foi removida.', 'success')
            .then(() => router.push('/plantacoes'));
        })
        .catch(error => {
          console.error('Erro ao excluir a plantação:', error);
          Swal.fire('Erro!', 'Não foi possível excluir a plantação.', 'error');
        });
    }
  };

  const handleCancel = () => router.push('/plantacoes');

  return {
    form,
    isEditMode,
    propriedades,
    handleChange,
    handleSubmit,
    handleCancel,
    handleDelete,
  };
}
