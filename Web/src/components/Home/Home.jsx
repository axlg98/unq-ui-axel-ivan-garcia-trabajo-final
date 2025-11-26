import { Link } from 'react-router';
import logo from '../../assets/preguntados.png';

export default function Home(){
    return (
        <div className='home-container'>
             <img src={logo} className='homeLogo' alt='Logo de preguntados'/>
             <Link to='/game' className='startBtn'>
                start
             </Link>
        </div>
    )
}