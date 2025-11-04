'use client'
import FormularioSensor from "@/app/components/FormSensor";
import { withAuth } from "@/app/components/withAuth";

function PaginaCadastro() {
  return (
    <section>
      <FormularioSensor />
    </section>
  );
}

export default withAuth(PaginaCadastro);