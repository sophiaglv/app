'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import api from '../lib/api';
import { Sensor } from '@/types/sensor';

export function useSensor() {
  const router = useRouter();
  const [sensores, setSensores] = useState<Sensor[]>([]);

  useEffect(() => {
    api.get<Sensor[]>('/sensores/').then(response => {
      setSensores(response.data);
    });
  }, []);


  const handleAdd = () => router.push('/sensores/cadastro'); 
  const handleEdit = (id: number) => router.push(`/sensores/editar/${id}`);

  return { sensores, handleAdd, handleEdit };
}