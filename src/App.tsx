import React from 'react';
import './App.css';
import MentalFlashCard from "./components/MentalFlashCard";
import ListOfQuestions from "../src/data/ListOfQuestions.json";
import InputFlashCard from "./components/InputFlashCard";
// import MultipleFlashCard from "./components/MultipleFlashCard";

function App() {
  return (
    <div className="App">
      {ListOfQuestions.map((question) => (
        <MentalFlashCard 
        key = {question.question}
        question = {question.question}
        answer = {question.answer}
        />
      ))}
        <InputFlashCard
        question = "Sur quelle planète désertique Anakin Skywalker est-il arrivé à l'âge de quatre ans ?"
        answer = "Tatooine"
        />
        {/* <MultipleFlashCard
        question = "Quel nom Obi-Wan Kenobi a-t-il adopté pendant des années jusqu'au jour où il rencontra Luke ?"
        answer = "Ben"
        wrongAnswers = {["Sid", "Ken", "Tom"]}
        /> */}
    </div>
  );
}

export default App;

