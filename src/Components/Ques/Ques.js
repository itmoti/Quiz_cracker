import React from 'react';
import QuesOptions from '../QuesOptions/QuesOptions';
import './Ques.css'

const Ques = ({ques , id}) => {
    const idMain = id +1 ;
    const {question , options } = ques;
    console.log(ques)
    const quesSplited = question.split(`/[ques.length - 3]/`)
    console.log(quesSplited)
    return (
        <div className='question'>
           
           <h6> {idMain} . {question}</h6>
            <p>{options.map(option => <QuesOptions 
                      option = {option}
            
            >            </QuesOptions>)} </p>
          
        
        </div>
    );
};

export default Ques;