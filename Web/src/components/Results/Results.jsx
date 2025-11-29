import './Results.css'
import preguntados from '../../assets/preguntados.png'

const ResultsScreen = ({ correct, onRestart }) => {
     return (
      <>
        <div className='containerResult' >
          <h1>Resultado final</h1>
          <p className='text'>
            Respuestas correctas: {correct} / 10  {/* Pongo 10 porque es el máximo por lo que miré */}
          </p>

          <button onClick={onRestart} className='boton' >
            Jugar otra vez
          </button>
        </div>

        <div className='containerImg'>
            <img src={preguntados} alt="Logo de preguntados" className='imgPreg'/>
        </div>

      </>
  );
}

export default ResultsScreen;