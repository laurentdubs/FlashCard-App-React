import React from "react";
import ListOfQuestions from "../data/ListOfQuestions.json"


type MentalFlashCardProps= {
    question: string;
    answer: string;
}

const MentalFlashCard: React.FC<MentalFlashCardProps> = ({question, answer}) => {
    const [showAnswer, setShowAnswer] = React.useState(false);

    return (
        <>
            <h1>MentalFlashCard</h1>
            <div
             className="mental-flashcard" onClick= {() => setShowAnswer (!showAnswer)}>
            {showAnswer ? answer + "✅" : question}
            </div>
        </>
    )
};

export default MentalFlashCard;