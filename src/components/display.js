import React, { useEffect, useState } from 'react';
import { FetchQuestions } from '../logic/fetchData';

import Input from './input';

export default function Display() {
  const [questions, setQuestions] = useState([]);
  
  const getQuestions = async () => {
    const qs = await FetchQuestions()
    setQuestions(qs)
  };

  useEffect(() => {
    getQuestions();
  }, [questions]);
  
  return (
    <div>
        <form action="/action_page.php">
            <ol>
            {questions.map((question) => {
                return(
                    <li key={question.id}>
                        <fieldset>
                            <legend>{question.q_text}</legend>
                            <Input qId={question.id} />
                        </fieldset>
                    </li>
                )
            })}
            </ol>
            <button type="submit">Submit my answers</button>
        </form>
        
    </div>
  );
}
