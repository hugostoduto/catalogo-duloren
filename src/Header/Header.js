import "./Header.css";
import logo from "./Logo-Preto.png";
import Catalogo from "./Catalogo.pdf";

export default function Header() {
  return (
    <header>
      <div className="header">
        <a
          href="https://www2.duloren.com.br/lookbook/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="logo" src={logo} alt="Logo" />
        </a>
        <a
          href={Catalogo}
          download="Catálgo Duloren"
          className="download-button"
        >
          Baixar o PDF
        </a>
      </div>
    </header>
  );
}
