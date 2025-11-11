'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import api from '../lib/api';
import { SensorForm } from '@/types/sensorForm';
import { Plantacao } from '@/types/plantacao';


export function useFormSensor(id?: string) {
  const router = useRouter();
  const isEditMode = Boolean(id);
  const [form, setForm] = useState<SensorForm>(
    {
      tipoSensor: '',
      codigo: '',
      localizacao: '', // O estado do formulário espera um ID simples
    }
  );
  const [plantacoes, setPlantacoes] = useState<Plantacao[]>([]);

  useEffect(() => {
    api.get<Plantacao[]>('/plantacao/').then(response => {
      setPlantacoes(response.data);
    }).catch(error => {
      console.error("Erro ao buscar a lista de plantacoes:", error);
      Swal.fire('Erro!', 'Não foi possível carregar a lista de plantacoes.', 'error');
    });

    if (isEditMode) {
      api.get(`/sensor/${id}`).then(response => {
        const dados = response.data;
        setForm({
          tipoSensor: dados.tipoSensor || '',
          codigo: dados.codigo || '',
          localizacao: dados.plantacao?.id || '',
        });
      }).catch(error => {
        console.error(`Erro ao buscar o item do sensor ${id}:`, error);
        Swal.fire('Erro!', 'Não foi possível carregar os dados para edição.', 'error');
        router.push('/sensor');
      });
    }
  }, [id, isEditMode, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const idPlantacaoNumerico = parseInt(String(form.localizacao), 10);

    if (!idPlantacaoNumerico) {
      Swal.fire('Atenção!', 'Você precisa selecionar uma plantação.', 'warning');
      return;
    }

    const dadosParaEnviar = {
      tipoSensor: form.tipoSensor,
      codigo: parseInt(String(form.codigo), 10) || 0,
      localizacao: {
        id: idPlantacaoNumerico
      }
    };

    const promise = isEditMode
      ? api.put(`/sensor/${id}`, dadosParaEnviar)
      : api.post('/sensor/', dadosParaEnviar);

    promise.then(() => {
      Swal.fire({
        title: 'Sucesso!',
        text: `Item do sensor ${isEditMode ? 'atualizado' : 'salvo'} com sucesso.`,
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
      });
      setTimeout(() => router.push('/sensores'), 1500);
    }).catch(error => {
      console.error("Erro ao salvar o item do sensor:", error);
      const errorMessage = error.response?.data?.message || 'Não foi possível salvar o item.';
      Swal.fire('Erro!', errorMessage, 'error');
    });
  };

  const handleCancel = () => {
    router.push('/sensores');
  };

  return {
    form,
    isEditMode,
    plantacoes,
    handleChange,
    handleSubmit,
    handleCancel,
  };
}