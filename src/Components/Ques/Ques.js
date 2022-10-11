import React from 'react';
import QuesOptions from '../QuesOptions/QuesOptions';

const Ques = ({ques}) => {
    const {question , options ,correctAnswer} = ques
    console.log(ques)
    return (
        <div>
           
           <h4>{question}</h4>
            <p>{options.map(option => <QuesOptions 
                      option = {option}
            
            >            </QuesOptions>)} </p>
            <p>{options}</p>
        
        </div>
    );
};

export default Ques;