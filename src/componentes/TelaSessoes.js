import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Dia from "./Dia";

function TelaSessoes() {
  const {filmeId} = useParams();
  const [dias, setDias] = useState([]);

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`);
    promise.then((response) => {
      const {data} = response;
      console.log(response);
      setDias(data.days);
    });
    promise.catch(err => alert("Ocorreu um erro inesperado."));
  },[])

  
  return (
    <Container>
      <h1>Selecione o horário</h1>
      <Dias>
        {
          dias.map(dia => {
            const {weekday, date, showtimes, id} = dia;
            return <Dia key={id} dia={weekday} data={date} sessoes={showtimes} />
          })
        }
      </Dias>
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
