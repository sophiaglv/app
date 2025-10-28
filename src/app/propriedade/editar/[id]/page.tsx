'use client'
import FormularioPropriedade from '../../../components/formularioPropriedade';
import { withAuth } from '@/app/components/withAuth';

function PaginaEdicao({ params }: { params: { id: string } }) {
  return (
    <section className='h-screen'>
      <h1>Edição de Propriedade</h1>
      <FormularioPropriedade id={params.id} />
    </section>
  );
}

export default withAuth(PaginaEdicao);