import { useState } from "react";
import './Questions.css'

const Question = ({question,onAnswer}) => {
    const[optionSelected,setOptionSelected] = useState(null);
    const[correctAnswer,setCorrectAnswer] = useState(null);
    const[showResult,setShowResult] = useState(false);

    const options = [question.option1, question.option2, question.option3].filter(Boolean);

    const handleAnswer = (option) => {
        setOptionSelected(option);
        setShowResult(true);

        const result = onAnswer(question.id,option);
        setCorrectAnswer(result.correctAnswer);
    }

    //PREGUNTAR ESTO EL MIÉRCOLES SI ESTÁ PERMITIDO USAR UNA const para CSS con el botón.
    const getBtnClass = (option) => {
        if(!showResult) return 'optionBtn';

        if(option === correctAnswer) return 'optionBtn correct'

        if(option === optionSelected && option !== correctAnswer) return 'optionBtn incorrect';

        return 'optionBtn disabled';
    }

    return(
        <div className="container">
            <h3>{question.question}</h3>
            <div className="options">
                {options.map((op) => (
                <button key={op} 
                        onClick={() => handleAnswer(op)}
                        disabled={showResult}
                        className={getBtnClass(op)}
                >
                    {op}
                </button>
            ))}

            {showResult && (
                <p className={optionSelected === correctAnswer ? 'result correct-text' : 'result incorrect-text'}>
                    {optionSelected === correctAnswer ? '¡Correcto! ✅' : '❌ Incorrecto'}
                </p>
            )}
            </div>
        </div>
    )

}

export default Question;