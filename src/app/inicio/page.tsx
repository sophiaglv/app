import Image from "next/image";
import Cards from "../components/Cards";
import "./page.css";

export default function Entrar() {
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
        <Cards />
      </div>

      <footer>
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