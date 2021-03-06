import React, { useState } from "react";
import { Question, QuizQuestion } from "./Question/Question";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const randomWords = require('random-words');

export function QuizPage() {
  const location = useLocation<{ quiz: Quiz }>();
  const locationQuiz = location.state && location.state.quiz;
  const [quiz, setQuiz] = useState(locationQuiz || generateRandomQuiz());
  const [questionKey, setQuestionKey] = useState(Math.random());
  const [results, setResults] = useState([] as WordResult[]);
  const [answers, setAnswers] = useState(new Array(quiz.questions.length) as string[]);
  const [reveal, setReveal] = useState(false);

  const onClickMark = () => {
    setResults(markQuiz(quiz, answers));
  };

  const onClickReveal = () => {
    console.log(reveal);
    setReveal(!reveal);
  };

  const onUpdateAnswer = (i: number, answer: string) => {
    answers[i] = answer;
    setAnswers(answers);
  };

  const onNewQuiz = () => {
    setReveal(false);
    setAnswers(new Array(quiz.questions.length));
    setResults([]);
    setQuiz(generateRandomQuiz());
    setQuestionKey(Math.random());
  };

  return (
    <section className="container">
      <p className="my-3">Enter your answers below. Press the &#9654; button to hear the word.</p>
      { quiz.questions.map((q, i) => <Question key={questionKey + i} question={q} number={i} result={results[i]} reveal={reveal} onUpdate={onUpdateAnswer}/>)  }

      <div className="container text-center">
        <Link className="btn btn-secondary btn-lg my-3" to="/">Home</Link>
        <button className="btn btn-secondary btn-lg my-3 ml-3" onClick={onNewQuiz}>New Quiz</button>
        <button className="btn btn-secondary btn-lg my-3 ml-3" onClick={onClickReveal}>Reveal Answers</button>
        <button className="btn btn-primary btn-lg my-3 ml-3" onClick={onClickMark}>Mark Answers</button>
      </div>
    </section>
  );
}

function generateRandomQuiz(): Quiz {
  return {
    questions: randomWords(8).map((word: string) => ({ word }))
  };
}

function markQuiz(quiz: Quiz, answers: string[]): boolean[][] {
  return answers.map((answer, i) => checkAnswer(quiz.questions[i].word, answer));
}

function checkAnswer(word: string, answer: string): boolean[] {
  return answer
    .toLowerCase()
    .split("")
    .map((char, i) => char === word.charAt(i).toLowerCase());
}

export interface Quiz {
  questions: QuizQuestion[]
}

/**
 * outcome of each character match
 */
export type WordResult = boolean[];
