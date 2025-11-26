import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Game from './components/Game/Game';

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