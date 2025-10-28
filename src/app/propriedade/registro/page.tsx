'use client'
import FormularioPropriedade from "../../components/formularioPropriedade";
import { withAuth } from "@/app/components/withAuth";
import "../../components/formularioPropriedade.css";
import Image from "next/image"

function PaginaRegistro() {
  return (
      <FormularioPropriedade />

  );
}

export default withAuth(PaginaRegistro);