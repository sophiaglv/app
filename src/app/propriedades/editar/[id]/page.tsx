'use client'
import FormularioPropriedade from '@/app/components/FormPropriedade';
import { withAuth } from '@/app/components/withAuth';

function PaginaEdicao({ params }: { params: { id: string } }) {
  return (
    <section>
      <FormularioPropriedade id={params.id} />
    </section>
  );
}

export default withAuth(PaginaEdicao);