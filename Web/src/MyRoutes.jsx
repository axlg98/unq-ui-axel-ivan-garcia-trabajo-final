import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';

function MyRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/game" element={<Game/>} />   
            </Routes>
        </BrowserRouter>
    );
}

export default MyRoutes;