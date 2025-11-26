import getQuestions from '../../services/questions';
import sendAnswer from '../../services/answer';
import { useEffect, useState } from 'react';

const GameScreen = ({difficulty , onFinish}) => {
    const[questions,setQuetions] = useState([]);
    const[index,setIndex] = useState(0);
    const[correctCount,setCorrectCount] = useState(0);

    useEffect(() => {
        getQuestions(difficulty).then(setQuetions);
    },[difficulty]);

    if(questions.length === 0) return <p>Cargando...</p>

    const current = questions[index];

    const handleAnswer = async (option) => {
        const result = await sendAnswer(current.id,option);
        if(result.correct){
            setCorrectCount((c) => c+1);
            alert('¡Respuesta correcta!');
        }else{
            alert('¡Respuesta incorrecta!');
        }

        if(index + 1 == questions.length){
            onFinish(correctCount + (result.correct ? 1 : 0),questions.length);
        }else{
            setIndex(index+1);
        }
    };

    return(
        <div>
            <h2>Dificultad: {difficulty} </h2>
            <h3> {current.question} </h3>
            
            {current.option.map((op) => {
                <button key={op} onClick={() => handleAnswer(op)}>
                    {op}
                </button>
            })}
        </div>
    )

}


export default GameScreen;