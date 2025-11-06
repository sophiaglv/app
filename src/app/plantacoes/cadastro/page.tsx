'use client'
import FormularioPlantacao from "@/app/components/FormPlantacao";
import { withAuth } from "@/app/components/withAuth";

function PaginaCadastro() {
  return (
    <section>
      <FormularioPlantacao />
    </section>
  );
}

export default withAuth(PaginaCadastro);