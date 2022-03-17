import React from 'react';
import './App.css';
import MentalFlashCard from "./components/MentalFlashCard";
import ListOfQuestions from "../src/data/ListOfQuestions.json";

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
      
    </div>
  );
}

export default App;
