import { useEffect, useState } from 'react';
import getDifficulties from '../../services/difficulties';
import './Start.css'
import preguntados from '../../assets/preguntados.png'
import { Link } from 'react-router';


const Start = () => {
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
                            <Link key={dif}  className='difBtn' to={`/game/difficulty/${dif}`} >
                                {dif}
                            </Link>
                    ))}
                </div>
            </div>
            <div className='containerImg'>
                <img src={preguntados} alt="Logo de preguntados" className='imgPreg'/>
            </div>
        </>
    )
}

export default Start;