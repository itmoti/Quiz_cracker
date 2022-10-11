import React from 'react';
import { Link } from 'react-router-dom';
import './Subject.css'

const Subject = ({subject  }) => {
    const {name , logo , total , id } = subject
    return (
        <div className='topic'>
          <img src={logo} alt='' />
          <div  className='topic-details'>
           <div className="topic-names">
           <h4>Name : {name}   </h4> <p>Total : {total}</p>
           </div>
          
            <Link className='btn' to = {`/home/ques/${id}`} >Go To Ques</Link>
        
          </div>
          
        
        </div>
    );
};

export default Subject;
