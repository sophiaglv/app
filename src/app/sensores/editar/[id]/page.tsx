'use client'
import { withAuth } from '@/app/components/withAuth';
import FormularioSensor from '@/app/components/FormSensor';


function PaginaEdicao({ params }: { params: { id: string } }) {
  // Renderiza o mesmo formulário, mas passando o ID da URL
  // O formulário vai saber que está em modo "edição"
  // @ts-ignore
  const formulario = <FormularioSensor id={params.id} />;
  return (
    <section>
      {formulario}
    </section>
  );
}

export default withAuth(PaginaEdicao);