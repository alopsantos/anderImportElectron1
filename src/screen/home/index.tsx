import React from "react";

import { Container, Content, Nav, Seccao, Card } from "./styles";
import logoDropbox from "../../assets/dropbox-logo.png";
import logoVtex from "../../assets/vtex-logo.png";
// import Header from "../Header";

const Home: React.FC = () => {
  return (
    <Container>
      <main>
        <Nav>
          <div>
            <img src={logoDropbox} alt="Logo dropbox" />
          </div>
          <div>
            <img src={logoVtex} alt="Logo vtex" />
          </div>
          <div>
            <p>
              AnderImport 1.0.0 <br />
              by: Anderson Lopes
            </p>
          </div>
        </Nav>
        <Content>
          <Seccao>
            <Card>
              <form action="">
                <div>
                  <input type="number" name="productId" id="productId" />
                </div>
                <div>
                  <button>Buscar</button>
                </div>
              </form>
            </Card>
          </Seccao>
          <Seccao className="tabelas">
            <Card>
              <table border={1}>
                <thead>
                  <tr>
                    <th>Sku Id</th>
                    <th>Tamanho</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2016304</td>
                    <td>P</td>
                  </tr>
                  <tr>
                    <td>2016304</td>
                    <td>M</td>
                  </tr>
                  <tr>
                    <td>2016304</td>
                    <td>G</td>
                  </tr>
                </tbody>
              </table>
            </Card>

            <Card>
              <table border={1}>
                <thead>
                  <tr>
                    <th>Foto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Shorts Running Onca.jpg</td>
                  </tr>
                  <tr>
                    <td>Shorts Running Onca.jpg</td>
                  </tr>
                  <tr>
                    <td>Shorts Running Onca.jpg</td>
                  </tr>
                  <tr>
                    <td>Shorts Running Onca.jpg</td>
                  </tr>
                  <tr>
                    <td>Shorts Running Onca.jpg</td>
                  </tr>
                  <tr>
                    <td>Shorts Running Onca.jpg</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </Seccao>
        </Content>
      </main>
    </Container>
  );
};

export default Home;
