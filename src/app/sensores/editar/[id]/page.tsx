'use client'

import { withAuth } from '../../../components/withAuth';
import FormularioSensor from '../../../components/FormSensor';
import { use } from 'react';

function PaginaEdicao({ params }: {params: Promise<{ id: string }>} ) {

  const parametroResolvidos = use(params);

  return (
    <section>
      <FormularioSensor id={parametroResolvidos.id} />
    </section>
  );
}

export default withAuth(PaginaEdicao);