import React from 'react';
import './QuesOptions.css'

const QuesOptions = ({option , optionHandleBtn}) => {
   
  
    return (
       <div>
         <p className='option' onClick={() => optionHandleBtn(option) }>
            {option}
        </p>
          
       </div>
      
    );
};

export default QuesOptions;