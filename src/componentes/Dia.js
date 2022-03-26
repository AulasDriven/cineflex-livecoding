function Dia(props) {
  const {dia, data, sessoes} = props;
  return (
    <>
      <h1>{dia}</h1>
      <h2>{data}</h2>
      <ul>
        {sessoes.map(sessao => {
          return <button>aaa</button>
        })}
      </ul>
    </>
  )
};

export default Dia;