import getQuestions from '../../services/questions';
import sendAnswer from '../../services/answer';
import Question from '../Questions/Questions';
import { useEffect, useState } from 'react';

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

    if(!current) {
        console.log('Los datos de las pregs.', current);
        return <p>Error cargando pregunta...</p>
    }

    const handleAnswer = async(questionId,option) => {
        const result = await sendAnswer(questionId, option);
        if(result.answer){
            setCorrectCount((c) => c+1);
            alert('Opción correcta!');
        }
         setCanContinue(true);
        console.log('Resultado de la respuesta:', result);
        return result;
    };

    const handleNext = () => {
          if(index + 1 === questions.length){
            onFinish(correctCount ,questions.length);
        }else{
            setIndex(index+1);
            setCanContinue(false);
        }
    }

    return(
        <div>
            <h2>Dificultad: {difficulty} </h2>
            <h3> Pregunta: {index+1} de {questions.length} </h3>
            <Question 
                question={current}
                onAnswer={handleAnswer}
            />

            {canContinue && (
                <button onClick={handleNext} >
                    {index + 1  === questions.length ? 'Ver Resultados' : 'Siguiente'}
                </button>
            )}
            
            
        </div>
    )

}


export default GameScreen;