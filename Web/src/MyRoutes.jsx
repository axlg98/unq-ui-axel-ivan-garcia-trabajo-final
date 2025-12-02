import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Game from './pages/Game';

function MyRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Game/>} />   
            </Routes>
        </BrowserRouter>
    );
}

export default MyRoutes;