import styled from "styled-components";

function Assento(props) {
  const {id, numero, disponivel, selecionado, aoSelecionar} = props;
  return (
    <Posicao
      disponivel={disponivel} 
      selecionado={selecionado}
      onClick={() => aoSelecionar(id)}
    >
      {numero}
    </Posicao>
  )
};

function corAssento(selecionado, disponivel) {
  if(selecionado) return "green";
  else if(disponivel) return "blue"
  else return "red"; 
}

const Posicao = styled.button`
    width: 26px;
    height: 26px;
    color: var(--cor-fundo-header);
    border: 1px solid #808F9D;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.selecionado ? "green" : "red"};
    cursor: pointer;
    margin: 20px 7px;
`

export default Assento;