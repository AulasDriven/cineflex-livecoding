import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Dia from "./Dia";

function TelaSessoes() {
  const {filmeId} = useParams();
  const [filme, setFilme] = useState({days:[]});

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`);
    promise.then((response) => {
      const {data} = response;
      setFilme(data);
    });
    promise.catch(err => alert("Ocorreu um erro inesperado."));
  },[])

  return (
    <Container>
      <h1>Selecione o horário</h1>
      <Dias>
        {
          filme.days.map(dia => {
            const {weekday, date, showtimes, id} = dia;
            return <Dia key={id} dia={weekday} data={date} sessoes={showtimes} />
          })
        }
      </Dias>
      <Footer>
        <img src={filme.posterURL} alt={filme.title} />
        <h1>{filme.title}</h1>
      </Footer>
    </Container>
  )
}

export default TelaSessoes;

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

const Dias = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  h1 {
    font-size: 26px;
  }
`
