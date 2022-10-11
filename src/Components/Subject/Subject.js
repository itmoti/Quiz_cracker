import React from 'react';

const Subject = ({subject , handleQuesButton}) => {
    const {name , logo , total , id } = subject
    return (
        <div>
          <img src={logo} alt='' />
          <h3>{name}   <br /><br /> <p>Total : {total}</p></h3>
          <button onClick={()=>handleQuesButton(id)} >Go To Topics</button>
        </div>
    );
};

export default Subject;