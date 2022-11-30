import React from "react";
import Header from "../Header";

import { Container, Content, Nav, Seccao, Card } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <main>
        <Nav>
          <div>
            <img src="../assets/dropbox-logo.png" alt="Logo dropbox" />
          </div>
          <div>
            <img src="assets/vtex-logo.png" alt="Logo vtex" />
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
          <Seccao>
            <Card>
              <table>
                <thead>
                  <tr>
                    <th>Sku Id</th>
                    <th>Tamanho</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2016304</td>
                    <td>G</td>
                  </tr>
                </tbody>
              </table>
            </Card>

            <Card>
              <table>
                <thead>
                  <tr>
                    <th>Foto</th>
                  </tr>
                </thead>
                <tbody>
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
