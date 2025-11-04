'use client'
import FormularioPropriedade from "@/app/components/FormPropriedade";
import { withAuth } from "@/app/components/withAuth";

function PaginaCadastro() {
  return (
    <section>
      <FormularioPropriedade />
    </section>
  );
}

export default withAuth(PaginaCadastro);