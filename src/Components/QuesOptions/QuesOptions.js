import React from 'react';
import './QuesOptions.css'

const QuesOptions = ({option , optionHandleBtn}) => {
   
  
    return (
        <p className='option' onClick={() => optionHandleBtn(option) }>
            {option}
        </p>
    );
};

export default QuesOptions;