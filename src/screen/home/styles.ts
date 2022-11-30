import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  main {
    display: flex;
  }
`;

export const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.white};
  width: 320px;
  height: calc(100vh - 3rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  justify-content: end;
  padding-bottom: 1.5rem;
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      color: ${(props) => props.theme.colors.opaque};
      text-align: center;
      font-size: 12px;
      font-weight: 700;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
  margin: 0 auto;
`;

export const Seccao = styled.section`
  display: flex;
  min-width: 500px;
  margin: 0 auto;
  /* align-items: center; */
  justify-content: center;

  &.tabelas {
    background-color: ${(props) => props.theme.colors.white};
    padding: 1.5rem;
    border-radius: 0.2rem;
  }
`;

export const Card = styled.article`
  /* display: flex; */

  form {
    display: flex;
    padding: 1rem 1.5rem;
    align-items: center;

    input {
      background-color: ${(props) => props.theme.colors.white};
      border: 0;
      width: 15rem;
      padding: 1rem 1.5rem;
    }

    button {
      background-color: ${(props) => props.theme.colors.opaque};
      border: 0;
      color: ${(props) => props.theme.colors.white};
      font-weight: 700;
      padding: 1rem 1.5rem;
      transition: all 0.3s;
      text-transform: uppercase;

      &:hover {
        background-color: ${(props) => props.theme.colors.grey};
      }
    }
  }

  table {
    border-color: rgb(148, 163, 184);
    border-collapse: collapse;
    border-width: 1px;

    thead {
      background-color: rgb(248, 250, 252);
    }

    th {
      color: rgb(15, 23, 42);
      text-align: left;
      padding: 0.5rem;
    }

    td {
      color: rgb(100, 116, 139);
      padding: 0.5rem;
    }
  }
`;
