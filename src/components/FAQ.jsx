import React, { useEffect, useState } from 'react';
import { getFAQs } from '../services/faq';
import {FiPlus, FiMinus} from 'react-icons/fi';

function FAQ(props) {
    const [questions, setQuestions] =  useState([]);
    const [clicked, setClicked] =  useState(false);

    useEffect(() => setQuestions(getFAQs()),[]);

    const toggle = index => {
        if (clicked === index) 
        return setClicked(null);   
        setClicked(index);    
    };

    return (
      <div className='faq-block'>
        <h5 className="faq">Frequently asked questions</h5>
        {
          questions.map((item, index) => (
          <div key={item.id} className='question-block'>
            <div onClick={() => toggle(index)}>
              <span className='question'>{item.question}</span>
              <span className='question'>
                {clicked === index ? <FiMinus /> : <FiPlus />}
              </span>
            </div>
            {clicked === index ? <div className='answer' >{item.answer}</div> : null}
          </div>
            )
        )}
      </div>
    );
}

export default FAQ;