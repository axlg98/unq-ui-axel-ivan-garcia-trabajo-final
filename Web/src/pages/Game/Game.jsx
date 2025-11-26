import ResultScreen from '../../components/Results/Results';
import StartScreen from '../../components/Start/Start';
import GameScreen from '../../components/Game/Game';
import { useState } from 'react';

const Game = () => {
    const[screen,setScreen] = useState('Start');
    const[difficulty,setDifficulty] = useState(null);
    const[correctCount,setCorrectCount] = useState(0);
    const[totalQuestions,setTotalQuestions] = useState(0);

    const startGame = (diff) =>{
        setDifficulty(diff);
        setCorrectCount(0);
        setScreen('Game');
    };

    const finishGame = (correct,total) => {
        setCorrectCount(correct);
        setTotalQuestions(total);
        setScreen('Result');
    }
    return(
        <>
            {screen == 'Start' && <StartScreen onStart={startGame}/>}
            {screen == 'Game' && (
                <GameScreen 
                  difficulty={difficulty} 
                  onFinish={finishGame}
                />
            )}

            {screen == 'Result' && (
                <ResultScreen 
                  onTotalQuestions={totalQuestions}
                  correct={correctCount}
                  onRestart={()=>setScreen('Start')}
                />
            )}
        </>
    )
}

export default Game;