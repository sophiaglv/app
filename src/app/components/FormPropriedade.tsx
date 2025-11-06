'use client';
import Image from "next/image";
import "./Formulario.css";

import { useFormPropriedade } from '../hooks/useFormPropriedade';

export default function FormularioPropriedade({ id }: { id?: string }) {
    const { form, isEditMode, handleChange, handleSubmit, handleCancel, handleDelete } = useFormPropriedade(id);

    return (
        <main className='formulario'>
            <form onSubmit={handleSubmit}>
                <nav className="formulario-nav">
                    <Image
                        src="/logo2.png"
                        alt="AquaBalance Logo"
                        width={170}
                        height={170}
                        className="logo"
                    />
                    <h1>
                        {isEditMode ? 'Editar Propriedade' : 'Adicionar Propriedade'}
                    </h1>
                </nav>
                <div className="formulario-content">
                    <div className="formulario-form">
                        <div className="formulario-input">

                            <div className="separar">
                                <label htmlFor="nomePropriedade">Nome da propriedade</label>
                                <input type="text" name="nomePropriedade" value={form.nomePropriedade} onChange={handleChange} required />

                                <label htmlFor="estado">Estado</label>
                                <input type="text" name="estado" value={form.estado} onChange={handleChange} required />

                                <label htmlFor="cidade">Cidade</label>
                                <input type="text" name="cidade" value={form.cidade} onChange={handleChange} required />
                            </div>
                            <div className="separar">
                                <label htmlFor="bairro">Bairro</label>
                                <input type="text" name="bairro" value={form.bairro} onChange={handleChange} required />

                                <label htmlFor="rua">Rua</label>
                                <input type="text" name="rua" value={form.rua} onChange={handleChange} required />

                                <label htmlFor="numero">Número</label>
                                <input type="number" name="numero" value={form.numero} onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="formulario-button">
                            <button type="submit" className="button">
                                {isEditMode ? 'Salvar' : '+ Adicionar Propriedade'}
                            </button>
                            {isEditMode && (
                                <button
                                    type="button"
                                    className="button delete"
                                    onClick={() => { if (id) handleDelete(Number(id)); }}
                                >
                                    Excluir
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </form>

            <footer>
                <Image
                    src="/home.png"
                    alt="home"
                    width={50}
                    height={50}
                    className="home"
                />
                <Image
                    src="/perfil.png"
                    alt="perfil"
                    width={50}
                    height={50}
                    className="perfil"
                />
            </footer>
        </main>
    );
}