import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import QuesOptions from '../QuesOptions/QuesOptions';
import './Ques.css'

import { AiFillEye } from 'react-icons/ai';




const Ques = ({ques , id}) => {
    const idMain = id +1 ;
    const {question , options } = ques;
   
    const quesSplited = question.split('<p>');
    const quesSplited2 = quesSplited[1].split('</p>')
   const quesClean = quesSplited2[0];

const correctAns = ques.correctAnswer;
   const optionHandleBtn = (option) => {
    if(correctAns === option) {
        toast('you are right')
     }
     else {
        toast('you are wrong')
     }
}
const correctAnsBtn = (correctAns) => {
    toast(correctAns)
}
    return (
        
        <div className='question'>

<div><Toaster/></div>
           
           <h6> {idMain} . {quesClean}   <div className='correctAnsBtn'> 
           <button  onClick={() => correctAnsBtn((correctAns))}><AiFillEye/></button>
           </div></h6>
          
            

            <p className='options'>{options.map(option => <QuesOptions 
                      option = {option}
                      optionHandleBtn = {optionHandleBtn}
                    
            
            >            </QuesOptions>)} </p>
          
        
        </div>
    );
};

export default Ques;