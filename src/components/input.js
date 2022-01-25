import React, { useEffect, useState } from 'react';
import { FetchOptions } from '../logic/fetchData';
import PropTypes from 'prop-types';

export default function Input(props) {
  const [options, setOptions] = useState([]);
  const [values, setValues] = useState([
    {id:0, value:'0'},
    {id:1, value:''},
    {id:2, value:''},
    {id:3, value:''},
    {id:4, value:''},
    {id:5, value:''},
    {id:6, value:''},
    {id:7, value:''},
    {id:8, value:''},
    {id:9, value:''},
    {id:10, value:''},
    {id:11, value:''},
    {id:12, value:''},
    {id:13, value:''},
    {id:14, value:''},
  ])

  const getOptions = async (q_id) => {
    let os  = await FetchOptions(q_id);
    setOptions(os);
  };

  useEffect(() => {
    getOptions(props.qId)
  }, [props.qId]);
  
  const scoreHandler = (e, id) => {
    let newValue = [...values]
    newValue[id].value = e.target.value
    setValues(newValue)
    console.log(values)
  };

  return (
    <div>
        {
            options.map((option) => {
                return  (
                    <div key={option.id}>
                        <input type="radio" key={option.id} className="action" name={option.question_id} id="track" value={option.score} onChange={(e) => scoreHandler(e, option.question_id)} />
                        <label htmlFor="track">{option.o_text}</label>
                        <br />
                    </div>
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