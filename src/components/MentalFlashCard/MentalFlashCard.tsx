import React from "react";

type MentalFlashCardProps= {
    question: string;
    answer: string;
}

const MentalFlashCard: React.FC<MentalFlashCardProps> = ({question, answer}) => {
    const [showAnswer, setShowAnswer] = React.useState(false);

    return (
        <>
        <h1>MentalFlashCard</h1>
        <div>
            className={
                
            }
        </div>
        
        
        
        
        </>
    )
};

export default MentalFlashCard;