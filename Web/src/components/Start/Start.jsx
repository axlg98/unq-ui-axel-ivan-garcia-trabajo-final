import { useEffect, useState } from 'react';
import getDifficulties from '../../services/difficulties';
import './Start.css'


const StartScreen = ({onStart}) => {
    const[difficulties,setDificulties] = useState([]);

    useEffect(() => {
        getDifficulties().then(setDificulties);
    },[])
    
    return(
        <div>
            <h1 className='tittleStart'> Preguntados </h1>
           
                <h2 className='difficulty'> Elegir dificultad:  </h2>
                
                {difficulties.map(dif => (
                    <div className='containerBtn' >
                        <button key={dif} onClick={() => onStart(dif)} className='difBtn' >
                            {dif}
                        </button>
                    </div>
                ))}
        </div>
    )
}

export default StartScreen;