import React from 'react';
import QuesOptions from '../QuesOptions/QuesOptions';
import './Ques.css'

const Ques = ({ques , id}) => {
    const idMain = id +1 ;
    const {question , options } = ques;
    console.log(ques)
    const quesSplited = question.split('<p>');
    const quesSplited2 = quesSplited[1].split('</p>')
   const quesClean = quesSplited2[0];
    return (
        <div className='question'>
           
           <h6> {idMain} . {quesClean}</h6>
            <p>{options.map(option => <QuesOptions 
                      option = {option}
            
            >            </QuesOptions>)} </p>
          
        
        </div>
    );
};

export default Ques;