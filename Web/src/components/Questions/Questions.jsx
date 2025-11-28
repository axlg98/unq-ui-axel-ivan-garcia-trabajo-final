import { useState } from "react";
import './Questions.css'

const Question = ({question,onAnswer}) => {
    const[optionSelected,setOptionSelected] = useState(null);
    const[correctAnswer,setCorrectAnswer] = useState(null);
    const[showResult,setShowResult] = useState(false);

    const allOps = [
            {key:'option1',value:question.option1},
            {key:'option2',value:question.option2},
            {key:'option3',value:question.option3},
            {key:'option4',value:question.option4},
    ];

    const handleAnswer = async(option) => {
        setOptionSelected(option);
        setShowResult(true);
        
        const result = await onAnswer(question.id,option);
        setCorrectAnswer(result.answer);
        return result;
    }

    //PREGUNTAR ESTO EL MIÉRCOLES SI ESTÁ PERMITIDO USAR UNA const para CSS con el botón.
    const getBtnClass = (option) => {
        if(!showResult) return 'optionBtn';

        if(option == correctAnswer) return 'optionBtn correct'

        if(option == optionSelected && option != correctAnswer) return 'optionBtn incorrect';

        return 'optionBtn disabled';
    }

    return(
        <div className="container">
            <h3>{question.question}</h3>
            <div className="options">
                {allOps.map((item) => (
                <button key={item.key} 
                        onClick={() => handleAnswer(item.key)}
                        
                        className={getBtnClass(item.value)}
                >
                    {item.value}
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