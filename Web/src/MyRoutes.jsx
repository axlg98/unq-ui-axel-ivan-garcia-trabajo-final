import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Game from './pages/Game';
import Start from './pages/Start/Start'

function MyRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start/>} /> 
                <Route path='/game/difficulty/:dif' element={<Game/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default MyRoutes;