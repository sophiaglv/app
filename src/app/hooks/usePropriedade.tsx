'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import api from '../lib/api';
import { Propriedade } from '@/types/propriedade';

export function usePropriedade() {
  const router = useRouter();
  const [propriedades, setPropriedades] = useState<Propriedade[]>([]);

  useEffect(() => {
    api.get<Propriedade[]>('/propriedades/').then(response => {
      setPropriedades(response.data);
    });
  }, []);


  const handleAdd = () => router.push('/propriedades/cadastro'); 
  const handleEdit = (id: number) => router.push(`/propriedades/editar/${id}`);

  return { propriedades, handleAdd, handleEdit };
}