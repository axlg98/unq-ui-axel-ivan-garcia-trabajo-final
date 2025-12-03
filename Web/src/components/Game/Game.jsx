import getQuestions from '../../services/questions';
import sendAnswer from '../../services/answer';
import Question from '../Questions/Questions';
import { useEffect, useState } from 'react';
import './Game.css'

const GameScreen = ({difficulty , onFinish}) => {
    const[questions,setQuestions] = useState([]);
    const[index,setIndex] = useState(0);
    const[correctCount,setCorrectCount] = useState(0);
    const[canContinue,setCanContinue] = useState(false);

    useEffect(() => {
        getQuestions(difficulty).then(setQuestions);
    },[difficulty]);

    if(questions.length === 0) return <p>Cargando...</p>

    const current = questions[index];

    const handleAnswer = async(questionId,option) => {
        const result = await sendAnswer(questionId, option);
        if(result.answer){
            setCorrectCount((c) => c+1);
        }
        setCanContinue(true);
        return result;
    };

    const handleNext = () => {
        if(index + 1 === questions.length){
            onFinish(correctCount);
          }else{
            setIndex(index+1);
            setCanContinue(false);
        }
    }

    return(
        <div className='container'>
            <div className='divContainer' >
                <div className='divHead'>
                    <h2 className='tittle'>Dificultad: {difficulty} </h2>
                    <h3 className='tittle'>correctas: {correctCount} </h3>
                </div>
                <h3 className='tittle' >Pregunta: {index+1} de {questions.length} </h3>
            </div>
            <Question 
                question={current}
                onAnswer={handleAnswer}
                countCorrect={correctCount}
            />
            {canContinue && (
                <button onClick={handleNext} className='optionBtn' >
                    {index + 1  === questions.length ? 'Ver Resultados' : 'Siguiente'}
                </button>
            )}
        </div>
    )

}


export default GameScreen;