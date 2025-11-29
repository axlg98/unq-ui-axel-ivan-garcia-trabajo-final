import { useEffect, useState } from 'react';
import getDifficulties from '../../services/difficulties';
import './Start.css'
import preguntados from '../../assets/preguntados.png'


const StartScreen = ({onStart}) => {
    const[difficulties,setDificulties] = useState([]);

    useEffect(() => {
        getDifficulties().then(setDificulties);
    },[])
    
    return(
        <>
            <div>
                <div>
                    <h1 className='tittleStart'> Preguntados </h1>

                    <h2 className='difficulty'> Elegir dificultad:  </h2>
                </div>

                <div className='containerBtn' >
                    {difficulties.map(dif => (
                            <button key={dif} onClick={() => onStart(dif)} className='difBtn' >
                                {dif}
                            </button>
                    ))}
                </div>
            </div>
            <div className='containerImg'>
                <img src={preguntados} alt="Logo de preguntados" className='imgPreg'/>
            </div>
        </>
    )
}

export default StartScreen;