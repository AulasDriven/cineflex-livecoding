import { Link } from "react-router-dom";
import styled from "styled-components";

function Dia(props) {
  const {dia, data, sessoes} = props;
  return (
    <Container>
      <h1>{dia} - {data}</h1>
      <ul>
        {sessoes.map(sessao => {
          const {id, name} = sessao;
          return (
            <Link key={id} to={`/assentos/${id}`}>
              <button>{name}</button>
            </Link>
          )
        })}
      </ul>
    </Container>
  )
};

const Container = styled.div`
  min-width: 375px;
  max-width: 500px;
  margin: 10px 0;

  h1 {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 60px;
    font-size: 20px;
  }

  button {
    font-size: 18px;
    background-color: var(--cor-laranja);
    border: 0;
    border-radius: 3px;
    color: white;
    padding: 15px 20px;
    margin-right: 10px;
    cursor: pointer;
  }
`;


export default Dia;