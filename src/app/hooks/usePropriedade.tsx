'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'; 
import api from '../lib/api';
import { Propriedade } from '../../types/propriedade';

export function usePropriedade() {
  const router = useRouter();
  const [propriedade, setPropriedade] = useState<Propriedade[]>([]);

  useEffect(() => {
    api.get<Propriedade[]>('/propriedade/').then(response => {
      setPropriedade(response.data);
    });
  }, []);

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
      api.delete(`/propriedade/${id}`).then(() => {
        setPropriedade(propriedadeAtuais => propriedadeAtuais.filter(p => p.id !== id));
        Swal.fire('Excluído!', 'O Propriedade foi removido.', 'success');
      });
    }
  };

  const handleAdd = () => router.push('/propriedade/registro'); 
  const handleEdit = (id: number) => router.push(`/propriedade/editar/${id}`);

  return { propriedade, handleDelete, handleAdd, handleEdit };
}