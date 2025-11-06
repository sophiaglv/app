'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import api from '../lib/api';
import { PlantacaoForm } from '@/types/plantacaoForm';
import { Propriedade } from '@/types/propriedade';
import { Plantacao } from '@/types/plantacao';


export function useFormPlantacao(id?: string) {
    const router = useRouter();
    const isEditMode = Boolean(id);
    const [form, setForm] = useState(
        {
            cultura: '',
            descricao: '',
            tamanho: '',
            umidadeIdeal: '',
            temperaturaIdeal: '',
            idPropriedade: '',
        };
    );
    const [propriedades, setPropriedades] = useState<Propriedade[]>([]);

    useEffect(() => {
        api.get<Propriedade[]>('/propriedades/').then(response => {
            setPropriedades(response.data);
        }).catch(error => {
            console.error("Erro ao buscar a lista de propriedades:", error);
            Swal.fire('Erro!', 'Não foi possível carregar a lista de propriedades.', 'error');
        });

        if (isEditMode) {
            api.get<PlantacaoForm>(`/plantacao/${id}`)
                .then(response => setForm(response.data))
                .catch(error => {
                    console.error(`Erro ao buscar a plantacao ${id}:`, error);
                    Swal.fire('Erro!', 'Não foi possível carregar os dados para edição.', 'error');
                    router.push('/plantacoes');
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
            api.delete(`/plantacao/${id}`).then(() => {
                setPlantacoes(plantacoesAtuais => plantacoesAtuais.filter(p => p.id !== id));
                Swal.fire('Excluído!', 'A plantacao foi removida.', 'success').then(() => router.push('/plantacao'));
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const idPropriedadeNumerico = parseInt(String(form.idPropriedade), 10);

        // --- VALIDAÇÃO ATUALIZADA ---
        // Verifica se o ID do propriedade é um número válido antes de continuar
        if (!idPropriedadeNumerico) {
            Swal.fire('Atenção!', 'Você precisa selecionar uma propriedade.', 'warning');
            return;
        }

        // --- MUDANÇA CRÍTICA AQUI ---
        // Monta o objeto no formato esperado pelo backend Java/Spring
        const dadosParaEnviar = {
            cultura: form.cultura,
            propriedade: {
                id: idPropriedadeNumerico
            },
            tamanho: parseInt(String(form.tamanho), 10) || 0,
            descricao: form.descricao,
            umidadeIdeal: parseInt(String(form.umidadeIdeal), 10) || 0,
            temperaturaIdeal: parseInt(String(form.temperaturaIdeal), 10) || 0,

        };

        const promise = isEditMode
            ? api.put(`/plantacao/${id}`, dadosParaEnviar)
            : api.post('/plantacao/', dadosParaEnviar);

        promise.then(() => {
            Swal.fire({
                title: 'Sucesso!',
                text: `Item do plantacao ${isEditMode ? 'atualizado' : 'salvo'} com sucesso.`,
                icon: 'success',
                timer: 2000,
                showConfirmButton: false,
            });
            setTimeout(() => router.push('/plantacao'), 1500);
        }).catch(error => {
            console.error("Erro ao salvar o item da plantação:", error);
            const errorMessage = error.response?.data?.message || 'Não foi possível salvar o item.';
            Swal.fire('Erro!', errorMessage, 'error');
        });
    };

    const handleCancel = () => {
        router.push('/plantacoes');
    };

    return {
        form,
        isEditMode,
        propriedades,
        handleChange,
        handleSubmit,
        handleCancel,
        handleDelete
    };
}