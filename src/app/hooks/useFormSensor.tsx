'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import api from '../lib/api';
import { SensorForm } from '@/types/sensorForm';
import { Sensor } from '@/types/sensor';

export function useFormSensor(id?: string) {
    const router = useRouter();
    const [form, setForm, ] = useState<SensorForm>({ tipoSensor: '', codigo: '', localizacao: ''});
    const [sensores, setSensores] = useState<Sensor[]>([]);
    const isEditMode = Boolean(id);

    useEffect(() => {
        if (isEditMode) {
            api.get<SensorForm>(`/sensores/${id}`)
                .then(response => setForm(response.data))
                .catch(() => {
                    Swal.fire('Erro', 'sensor não encontrado', 'error').then(() => router.push('/sensores'));
                });
        }
    }, [id, isEditMode, router]);

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
            api.delete(`/sensores/${id}`).then(() => {
                setSensores(sensoresAtuais => sensoresAtuais.filter(p => p.id !== id));
                Swal.fire('Excluído!', 'O sensor foi removido.', 'success').then(() => router.push('/sensores'));
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(currentForm => ({ ...currentForm, [name]: value }));
    };

    const handleCancel = () => {
        router.push('/sensores');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const sensorParaEnviar = { ...form, codigo: Number(form.codigo) };
        const method = isEditMode ? 'put' : 'post';
        const url = isEditMode ? `/sensores/${id}` : '/sensores/';
        const successMessage = `Sensor ${isEditMode ? 'atualizado' : 'cadastrado'} com sucesso!`;

        api[method](url, sensorParaEnviar)
            .then(() => Swal.fire('Sucesso', successMessage, 'success'))
            .then(() => router.push('/sensores'))
            .catch((error) => {
                console.error("Falha ao salvar o sensor:", error);
                Swal.fire('Erro', 'Não foi possível salvar o sensor.', 'error');
            });
    };

    return { form, isEditMode, handleChange, handleSubmit, handleCancel, handleDelete };
}