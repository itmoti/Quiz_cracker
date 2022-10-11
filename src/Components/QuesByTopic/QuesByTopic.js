import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Ques from '../Ques/Ques';
import './QuesByTopic.css'

const QuesByTopic = () => {
    const quesGroupFetch = useLoaderData();
     const quesGroup = quesGroupFetch.data.questions;
   console.log(quesGroup)
  
    return (
      
       <div className="container">
       
         <div className='quesGroup'>

{
    quesGroup.map((ques , id) => 
       <>
      <div>
       <Ques id = {id}
        key = {ques.id}
        ques = {ques}

    ></Ques>
      </div>
       </>
       )
}
</div>
       </div>
    );
};

export default QuesByTopic;