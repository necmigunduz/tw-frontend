import React, { useEffect, useState } from 'react';
import { FetchOptions } from '../logic/fetchData';
import PropTypes from 'prop-types';

export default function Input(props) {
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);

  const getOptions = async (q_id) => {
    let os  = await FetchOptions(q_id);
    console.log(os)
    setOptions(os);
  };

  useEffect(() => {
    getOptions(props.qId)
  }, [props.qId]);
  
  const addScore = (newScore) => {
    newScore += score
    setScore(newScore)
    console.log(score)
  };

  return (
    <div>
        {
            options.map((option) => {
                return  (
                    <>
                        <input type="radio" className="action" name={option.question_id} id="track" value="track" onSelect={addScore(option.score)}/>
                        <label htmlFor="track">{option.o_text}</label>
                        <br />
                    </>
                )
            })
        }
    </div>
  );
}

Input.propTypes = {
  qId: PropTypes.number.isRequired
}

Input.defaultProps = {
  qId: 0
}