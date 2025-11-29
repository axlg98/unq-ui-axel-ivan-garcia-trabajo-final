import { useEffect, useState } from "react";
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

    useEffect(() => {
        setOptionSelected(null);
        setCorrectAnswer(null);
        setShowResult(false);
    }, [question.id]);

    const handleAnswer = async(option) => {
        console.log("Opción recibida en handleAnswer:", option);
        const result = await onAnswer(question.id,option);
        setShowResult(true);
        setCorrectAnswer(result.answer);
        setOptionSelected(option);
        console.log("optionSelected: " ,optionSelected);
        console.log("correctAnswer: " ,correctAnswer);
        //return result;
    }

    //PREGUNTAR ESTO EL MIÉRCOLES SI ESTÁ PERMITIDO USAR UNA const para CSS con el botón.
    const getBtnClass = (option) => {
        if(!showResult) return 'optionBtn';

        // 1. Si la opción seleccionada es la actual Y el resultado fue CORRECTO
        if(option.key == optionSelected && correctAnswer) {
            return 'optionBtn correct';
        }

        // 2. Si la opción seleccionada es la actual Y el resultado fue INCORRECTO
        if(option.key == optionSelected && correctAnswer) {
            return 'optionBtn incorrect';
        }

        // 3. El resto de las opciones se desactivan.
        return 'optionBtn disabled';
    }

    return(
        <div className="container">
            <h3>{question.question}</h3>
            <div className="options">
                {allOps.map((item) => (
                <button key={item.key} 
                        onClick={() => handleAnswer(item.key)}
                        disabled={showResult}
                        className={getBtnClass(item.key)}
                >
                    {item.value}
                </button>
            ))}

            {showResult && (
                
                <p className={correctAnswer ? 'result correct-text' : 'result incorrect-text'}>
                    {correctAnswer ? '¡Correcto! ✅' : '❌ Incorrecto'}
                </p>
            )}
            </div>
        </div>
    )

}

export default Question;