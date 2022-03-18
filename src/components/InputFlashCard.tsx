import React from "react";
import "../InputFlashCard.css";

type InputFlashCardProps= {
    question: string;
    answer: string;
}

const InputFlashCard: React.FC<InputFlashCardProps> = ({
    question,
    answer,
}) => {
    const [userAnswer, setUserAnswer] = React.useState("");
    const [showAnswer, setShowAnswer] = React.useState(false);

    return(
        
        <div className= "flashcard">
            <h1>InputFlashCard</h1>
            {showAnswer ? (
                <div
                    className= {userAnswer === answer ? "bg-success" : "bg-error"}
                    onClick= {() => {
                    setShowAnswer(!showAnswer);
                    setUserAnswer("");
                    }}
                    >
                    <div>{userAnswer === answer ? "✅" : "❌"}</div>
                </div>
            ) : null}
            <div>{showAnswer ? "The answer is :" + answer : question}</div> 
                    <input type="text" 
                    onChange={(event) => {
                        setUserAnswer(event.target.value);
                    }}
                    value={userAnswer}
                    />
                    <button onClick={() => setShowAnswer(!showAnswer)}>Check</button>
        </div>
    )
}

export default InputFlashCard;