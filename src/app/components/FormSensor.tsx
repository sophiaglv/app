'use client';
import Image from "next/image";
import "./Formulario.css";

import { useFormSensor } from '../hooks/useFormSensor';

export default function FormularioSensor({ id }: { id?: string }) {
    const { form, isEditMode, handleChange, handleSubmit, handleCancel, handleDelete } = useFormSensor(id);

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
                        {isEditMode ? 'Editar Sensor' : 'Adicionar Sensor'}
                    </h1>
                </nav>
                <div className="formulario-content">
                    <div className="formulario-form">
                        <div className="formulario-input">
                            <label htmlFor="tipoSensor">Tipo</label>
                            <input type="text" name="tipoSensor" value={form.tipoSensor} onChange={handleChange} required />

                            <label htmlFor="codigo">Código</label>
                            <input type="number" name="codigoo" value={form.codigo} onChange={handleChange} required />

                            <label htmlFor="localizacao">Localização</label>
                            <input type="text" name="localizacao" value={form.localizacao} onChange={handleChange} required />
                        </div>

                        <div className="formulario-button">
                            <button type="submit" className="button">
                                {isEditMode ? 'Salvar' : '+ Adicionar Sensor'}
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