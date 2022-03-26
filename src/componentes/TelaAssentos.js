import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Assento from "./Assento";

function TelaAssentos() {
  const {sessaoId} = useParams();
  const [sessao, setSessao] = useState(null);
  const [assentosSelecionados, setAssentosSelecionados] = useState([]);

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`;

    const promise = axios.get(URL);
    promise.then(({data}) => {
      console.log(data);
      setSessao(data);
    })

  }, []);

  function toggle(id) {
    if(!assentosSelecionados.includes(id)) {
      setAssentosSelecionados([...assentosSelecionados, id]);
    } else {
      const novosAssentos = [...assentosSelecionados];
      novosAssentos.splice(novosAssentos.indexOf(id),1);
      setAssentosSelecionados(novosAssentos);
    }
  }

  function montarAssentos() {
    if(sessao !== null) {
      return sessao.seats.map(seat => {
        const {id, name, isAvailable} = seat;
        const selecionado = assentosSelecionados.includes(id);
        return (
          <Assento 
            key={id} 
            id={id} 
            numero={name} 
            disponivel={isAvailable} 
            selecionado={selecionado}
            aoSelecionar={(id) => toggle(id)}
          />
        )
      })
    } else {
      <p>Carregando...</p>;
    }
  }

  function montarFooter() {
    if(sessao !== null) {
      return <>
        <img src={sessao.movie.posterURL} alt={sessao.movie.title} />
        <div>
          <p>{sessao.movie.title}</p>
          <p>{sessao.day.weekday} - {sessao.name}</p>
        </div>
      </>
    } else {
      return <p>Carregando...</p>;
    }
  }

  const assentos = montarAssentos();
  const footer = montarFooter();
  return (
    <Container>
      <h1>Selecione o(s) assentos(s)</h1>
      <Assentos>{assentos}</Assentos>
      <Legenda>

      </Legenda>
      <DadosCompra>
        <form>
          <label htmlFor="nome">Nome do comprador:</label>
          <input type="text" id="nome"/>
          <label htmlFor="nome">CPF do comprador:</label>
          <input type="text" id="nome"/>
          <button>Reservar assento(s)</button>
        </form>
      </DadosCompra>
      <Footer>{footer}</Footer>
    </Container>
  )
}

export default TelaAssentos;

const Container = styled.div`
  margin: 70px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    height: 100px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Assentos = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

const Legenda = styled.div`
`;

const DadosCompra = styled.div`
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  display: flex;
  align-items: center;
  background-color: var(--cor-fundo-footer);

  img {
    width: 48px;
    height: 72px;
    padding: 8px;
    background-color: white;
    border-radius: 2px;
    margin: 10px;
    box-shadow: 0px 2px 4px 0px #0000001A;
    border: 1px solid #9EADBA;
  }

  p {
    font-size: 26px; 
  }
`
