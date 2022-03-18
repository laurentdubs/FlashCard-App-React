import React from "react";

type MultipleFlashCardProps= {
    question: string;
    answer: string;
    wrongAnswers: string[];
}

const MultipleFlashCard: React.FC<MultipleFlashCardProps> = ({
    question,
    answer,
    wrongAnswers
    }) => {
        const [userAnswer, setUserAnswer] = React.useState("");
        const [showAnswer, setShowAnswer] = React.useState(false);
        // const restOfAllAnswers: string[]= [];
        // const [allAnswers, setAllAnswers] = React.useState(restOfAllAnswers);

    // React.useEffect(() => {
    //     const answers = [answer, ...wrongAnswers].sort(() => Math.random() -0.5);
    //     setAllAnswers(answers);
    // }, [answer, wrongAnswers]);
    

    return(
        
        <div className= "flashcard">
            <h1>MultipleFlashCard</h1>
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
        

export default MultipleFlashCard;