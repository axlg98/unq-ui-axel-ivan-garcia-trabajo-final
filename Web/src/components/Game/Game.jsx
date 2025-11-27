import getQuestions from '../../services/questions';
import sendAnswer from '../../services/answer';
import { useEffect, useState } from 'react';

const GameScreen = ({difficulty , onFinish}) => {
    const[questions,setQuestions] = useState([]);
    const[index,setIndex] = useState(0);
    const[correctCount,setCorrectCount] = useState(0);

    useEffect(() => {
        getQuestions(difficulty).then(setQuestions);
    },[difficulty]);

    if(questions.length === 0) return <p>Cargando...</p>

    const current = questions[index];

    if(!current) {
        console.log('Los datos de las pregs.', current);
        return <p>Error cargando pregunta...</p>
    }

     const options = [current.option1, current.option2, current.option3].filter(Boolean);

    const handleAnswer = async(option) => {
        const result = await sendAnswer(current.id, option);
        if(result.correct){
            setCorrectCount((c) => c+1);
            alert('¡Respuesta correcta!');
        }else{
            alert('¡Respuesta incorrecta!');
        }

        if(index + 1 === questions.length){
            onFinish(correctCount + (result.correct ? 1 : 0),questions.length);
        }else{
            setIndex(index+1);
        }
    };

    return(
        <div>
            <h2>Dificultad: {difficulty} </h2>
            <h3> {current.question} </h3>
            
            {options.map((op) => (
                <button key={op} onClick={() => handleAnswer(op)}>
                    {op}
                </button>
            ))}
        </div>
    )

}


export default GameScreen;