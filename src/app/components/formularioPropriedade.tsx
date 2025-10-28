'use client';
import "./formularioPropriedade.css";
import { useFormularioPropriedade } from '../hooks/useFormularioPropriedade';

export default function FormularioProduto({ id }: { id?: string }) {
  const { form, isEditMode, handleChange, handleSubmit, handleCancel } = useFormularioPropriedade(id);

  return (
    <div className="registro">
      <form onSubmit={handleSubmit}>
        <h1>
          {isEditMode ? 'Editar Propriedade' : 'Adicionar Propriedade'}
        </h1>

        <div className="mb-4">
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" value={form.nome} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label htmlFor="pais">Pais</label>
          <input type="text" name="pais" value={form.pais} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label htmlFor="rua">Rua</label>
          <input type="text" name="rua" value={form.rua} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label htmlFor="estado">Estado</label>
          <input type="text" name="estado" value={form.estado} onChange={handleChange} required />
        </div>
        <div>
          <div className="mb-4">
            <label htmlFor="cidade">Cidade</label>
            <input type="text" name="cidade" value={form.cidade} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="numero">Número</label>
            <input type="text" name="numero" value={form.numero} onChange={handleChange} required />
          </div>
          <button type="button" onClick={handleCancel}>
            Cancelar
          </button>
          <button type="submit">
            {isEditMode ? 'Atualizar' : 'Salvar'}
          </button>
        </div>
      </form>
    </div>
  );
}