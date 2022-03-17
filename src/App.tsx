import React from 'react';
import './App.css';
import MentalFlashCard from "./components/MentalFlashCard/MentalFlashCard";
import ListOfQuestions from "../src/components/ListOfQuestions";

function App() {
  return (
    <div className="App">
      {ListOfQuestions.map((question) => (
      <MentalFlashCard 
      key= {question.question}
      question = {question.question}
      answer = {question.answer}
      />
    ))}
    </div>
  );
}

export default App;
