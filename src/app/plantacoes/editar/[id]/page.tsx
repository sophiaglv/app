'use client'

import { withAuth } from '../../../components/withAuth';
import FormularioPlantacao from '../../../components/FormPlantacao';
import { use } from 'react';

function PaginaEdicao({ params }: {params: Promise<{ id: string }>} ) {

  const parametroResolvidos = use(params);

  return (
    <section>
      <FormularioPlantacao id={parametroResolvidos.id} />
    </section>
  );
}

export default withAuth(PaginaEdicao);