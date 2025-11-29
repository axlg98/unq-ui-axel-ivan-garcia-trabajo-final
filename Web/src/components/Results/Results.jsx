const ResultsScreen = ({ correct, onRestart }) => {
     return (
    <div>
      <h1>Resultado final</h1>
      <p>
        Respuestas correctas: {correct} / 10  {/* Pongo 10 porque es el máximo por lo que miré */}
      </p>

      <button onClick={onRestart}>
        Jugar otra vez
      </button>
    </div>
  );
}

export default ResultsScreen;