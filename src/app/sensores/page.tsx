'use client';

import Image from "next/image";
import "./page.css";

import { withAuth } from '../components/withAuth';
import { useSensor } from "../hooks/useSensor";

function PaginaSensor() {
  const { handleAdd } = useSensor();
  return (
    <main className="inicio">
        <h1>Minhas Plantacoes</h1>
    </main>
  );
}

export default withAuth(PaginaSensor);