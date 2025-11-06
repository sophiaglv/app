'use client';

import Image from "next/image";
import "./page.css";

import { withAuth } from '../components/withAuth';
import { usePlantacao } from "../hooks/usePlantacao";

function PaginaPlantacao() {
  const { handleAdd } = usePlantacao();
  return (
    <main className="inicio">
        <h1>Minhas Plantacoes</h1>
    </main>
  );
}

export default withAuth(PaginaPlantacao);