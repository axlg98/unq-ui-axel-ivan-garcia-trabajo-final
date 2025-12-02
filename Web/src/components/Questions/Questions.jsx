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
        const result = await onAnswer(question.id,option);
        setShowResult(true);
        setCorrectAnswer(result.answer);
        setOptionSelected(option);
        //return result;
    }

    const getBtnClass = (option) => {
        if(!showResult) return 'optionBtn';

        if (option === optionSelected) {
            if (correctAnswer) {
                return 'optionBtn correct'; 
            } else {
                return 'optionBtn incorrect';
            }
        }

        return 'optionBtn disabled';
    }

    const isCorrect = () =>{
        return correctAnswer ? 'result correct-text' : 'result incorrect-text';
    }

    return(
        <div className="container">
            <h3 className="question" >{question.question}</h3>
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
                <p className={isCorrect()}>
                    {correctAnswer ? '✅ Correcto ' : '❌ Incorrecto'}
                </p>
            )}
            </div>
        </div>
    )

}

export default Question;