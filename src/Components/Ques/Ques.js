import React from 'react';
import QuesOptions from '../QuesOptions/QuesOptions';
import './Ques.css'

const Ques = ({ques , id}) => {
    const idMain = id +1 ;
    const {question , options } = ques;
   
    const quesSplited = question.split('<p>');
    const quesSplited2 = quesSplited[1].split('</p>')
   const quesClean = quesSplited2[0];
//    console.log(ques.correctAnswer);
const correctAns = ques.correctAnswer;
   const optionHandleBtn = (option) => {
    if(correctAns === option) {
        alert('you are right')
     }
     else {
        alert('you are wrong')
     }
}
    return (
        <div className='question'>
           
           <h6> {idMain} . {quesClean}</h6>
            <p className='options'>{options.map(option => <QuesOptions 
                      option = {option}
                      optionHandleBtn ={optionHandleBtn}
            
            >            </QuesOptions>)} </p>
          
        
        </div>
    );
};

export default Ques;