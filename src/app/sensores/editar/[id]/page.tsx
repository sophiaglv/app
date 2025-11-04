'use client'
import FormularioSensor from '@/app/components/FormSensor';
import { withAuth } from '@/app/components/withAuth';

function PaginaEdicao({ params }: { params: { id: string } }) {
  return (
    <section>
      <FormularioSensor id={params.id} />
    </section>
  );
}

export default withAuth(PaginaEdicao);