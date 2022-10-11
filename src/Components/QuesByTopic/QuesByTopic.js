import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Ques from '../Ques/Ques';

const QuesByTopic = () => {
    const quesGroupFetch = useLoaderData();
     const quesGroup = quesGroupFetch.data.questions;
   
  
    return (
        <div>
            {
                quesGroup.map(ques => <Ques 
                    key = {ques.id}
                    ques = {ques}

                ></Ques>)
            }
        </div>
    );
};

export default QuesByTopic;