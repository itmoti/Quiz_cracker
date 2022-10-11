import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import Subject from '../Subject/Subject';

const Home = () => {
    const topics = useLoaderData();
    const subjects = topics.data;

    // const handleQuesButton = (id) => {
    //     <Link to={`/home/ques/${id}`} ></Link>
    // }
    
    return (
        <div>
             {
                subjects.map(subject => <Subject
                key={subject.id}
                subject = {subject}
               
                ></Subject>)
             }
        </div>
    );
};

export default Home;