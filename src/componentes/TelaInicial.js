import styled from "styled-components";
import {useState, useEffect} from "react";

import Filme from "./Filme";
import axios from "axios";

function TelaInicial() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    promise.then(({data}) => setFilmes(data));
    promise.catch(err => alert(err.response.statusText));
  }, [])

  function gerarFilmesEmExibicao() {
    if(filmes.length > 0) {
      return filmes.map(filme => <Filme />)
    } else {
      return <p>Carregando filmes...</p>
    }
  }

  const filmesEmExibicao = gerarFilmesEmExibicao();
  return (
    <Container>
      <h1>Selecione o filme</h1>
      <Filmes>
        {filmesEmExibicao}
      </Filmes>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 70px;
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

const Filmes = styled.div`
`;

export default TelaInicial;