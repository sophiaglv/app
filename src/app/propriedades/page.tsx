'use client';

import Image from "next/image";
import "./page.css";

import { withAuth } from '../components/withAuth';
import { usePropriedade } from '../hooks/usePropriedade';

function PaginaPropriedade() {
  const { handleAdd } = usePropriedade();
  return (
    <main className="inicio">
      <nav className="inicio-nav">
        <Image
          src="/logo2.png"
          alt="AquaBalance Logo"
          width={170}
          height={170}
          className="logo"
        />
        <h1>Minhas Propriedades</h1>
      </nav>
      <div className="inicio-content">
        <form className="inicio-form">
          <input type="text" placeholder="Pesquisar" />
        </form>
      </div>

      

      <footer className="footer">
        <Image
          src="/home.png"
          alt="home"
          width={50}
          height={50}
          className="home"
        />
        <Image
          src="/plus.png"
          alt="plus"
          width={50}
          height={50}
          className="plus"
          onClick={handleAdd}
        />
        <Image
          src="/perfil.png"
          alt="perfil"
          width={50}
          height={50}
          className="perfil"
        />
      </footer>
    </main>
  );
}

export default withAuth(PaginaPropriedade);