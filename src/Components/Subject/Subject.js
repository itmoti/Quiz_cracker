import React from 'react';

const Subject = ({subject}) => {
    const {name , logo , total } = subject
    return (
        <div>
          <img src={logo} alt='' />
          <h3>{name}   <br /><br /> <p>Total : {total}</p></h3>
          
        </div>
    );
};

export default Subject;