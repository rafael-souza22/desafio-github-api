import { useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import "./styles.css";
import axios from "axios";
import { userDTO } from "../../models/userDTO";

type FormData = {
  user: string;
};
("");

export default function Search() {
  const [formData, setFormData] = useState<FormData>({
    user: "",
  });

  const [userData, setUserData] = useState<userDTO>();

  const [error, setError] = useState<string>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setUserData(response.data);
        setError(null);
      })
      .catch(() => {
        setError("Erro ao buscar usuário");
        setUserData(null);
      });
  };

  return (
    <>
      <Header />
      <main>
        <section className="search-card-container">
          <h1>Encontre um perfil Github</h1>
          <form name="search-form" onSubmit={handleSubmit}>
            <div className="search-form-control">
              <label htmlFor="user">Usuário</label>
              <input
                name="user"
                id="user"
                type="text"
                placeholder="Usuário Github"
                value={formData.user}
                onChange={handleInputChange}
              />
            </div>
            <Button text="Encontrar" />
          </form>
        </section>
        {error && (
          <div className="error-message">
            <h1>{error}</h1>
          </div>
        )}

        {userData && (
          <section>
            <div className="user-info-container">
              <img src={userData.avatar_url} alt="Imagem do perfil" />
              <div className="user-form-card-info">
                <form name="user-info">
                  <div className="card-title-info">Informações</div>
                  <div className="user-info-form-control">
                    <label htmlFor="user-info">Perfil:</label>
                    <input
                      name="user-info"
                      id="user-info"
                      className="user-info-input-control url"
                      type="text"
                      value={userData.html_url ?? ""}
                      readOnly
                    />
                  </div>
                  <div className="user-info-form-control">
                    <label htmlFor="followers">Seguidores:</label>
                    <input
                      name="followers"
                      id="followers"
                      className="user-info-input-control"
                      type="text"
                      value={userData.followers ?? ""}
                      readOnly
                    />
                  </div>
                  <div className="user-info-form-control">
                    <label htmlFor="location">Localidade:</label>
                    <input
                      name="location"
                      id="location"
                      className="user-info-input-control"
                      type="text"
                      value={userData.location ?? ""}
                      readOnly
                    />
                  </div>
                  <div className="user-info-form-control">
                    <label htmlFor="name">Nome:</label>
                    <input
                      name="name"
                      id="name"
                      className="user-info-input-control"
                      type="text"
                      value={userData.name ?? ""}
                      readOnly
                    />
                  </div>
                </form>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
