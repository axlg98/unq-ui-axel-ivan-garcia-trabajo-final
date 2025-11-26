


const ResultsScreen = ({ correct, total, onRestart }) => {
     return (
    <div>
      <h1>Resultado final</h1>
      <p>
        Respuestas correctas: {correct} / {total}
      </p>

      <button onClick={onRestart}>
        Jugar otra vez
      </button>
    </div>
  );
}

export default ResultsScreen;