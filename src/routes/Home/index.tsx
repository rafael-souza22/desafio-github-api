import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import "./styless.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="card-container">
          <h1>Desafio Github API</h1>
          <p>DevSuperior - Escola de programação</p>
          <div className="mt27">
            <Link to="/search">
              <Button text="Começar" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
