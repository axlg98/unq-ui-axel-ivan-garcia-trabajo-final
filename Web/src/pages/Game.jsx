import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GameScreen from '../components/Game/Game';
import ResultScreen from '../components/Results/Results';

const Game = () => {
    const { dif } = useParams(); 
    const navigate = useNavigate();

    const [correctCount, setCorrectCount] = useState(0);
    const [finished, setFinished] = useState(false);

    if (!dif) {
        navigate('/');
    }
    
    const finishGame = (correct) => {
        setCorrectCount(correct);
        setFinished(true);
    };

    const restartGame = () => {
        setFinished(false);
        setCorrectCount(0);
        navigate('/')
    };

    return (
        <>
            {!finished ? (
                <GameScreen difficulty={dif} onFinish={finishGame} />
            ) : (
                <ResultScreen correct={correctCount} onRestart={restartGame} />
            )}
        </>
    );
};

export default Game;
