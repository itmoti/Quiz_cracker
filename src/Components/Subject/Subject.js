import React from 'react';
import { Link } from 'react-router-dom';

const Subject = ({subject , handleQuesButton}) => {
    const {name , logo , total , id } = subject
    return (
        <div>
          <img src={logo} alt='' />
          <h3>{name}   <br /><br /> <p>Total : {total}</p></h3>
          {/* <button onClick={()=>handleQuesButton(id)} >Go To Topics</button> */}
          <button>
            <Link to = {`/home/ques/${id}`} >Go To Ques</Link>
          </button>
        </div>
    );
};

export default Subject;