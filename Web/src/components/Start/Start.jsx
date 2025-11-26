import { useEffect, useState } from 'react';
import getDifficulties from '../../services/difficulties';


const StartScreen = ({onStart}) => {
    const[difficulties,setDificulties] = useState([]);

    useEffect(() => {
        getDifficulties().then(setDificulties);
    },[])
    
    return(
        <div>
            <h1> Preguntados </h1>
           
                <h2> Elegir dificultad:  </h2>
                
                { difficulties != null && difficulties.map(dif => {
                    
                    return(<button key={dif} onClick={() => onStart(dif)} className='difBtn' >
                        {dif}
                    </button>)
                })}
        </div>
    )
}

export default StartScreen;