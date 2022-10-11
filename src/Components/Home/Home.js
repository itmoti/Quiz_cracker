import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import './Home.css'

import Subject from '../Subject/Subject';

const Home = () => {
    const topics = useLoaderData();
    const subjects = topics.data;

    
    
    return (
        <div>
            <div className="details">
            <h4>Ques Bank is mainly created for the Next Generation Coders.
                Coders can test there knowledge by answering simply questions.They Can Master Code.
            </h4>
            <code>
            Our Features 
            <div className='features'>
            <ol>
                <li>We provide topic wise questions</li>
                <li>User friendly</li>
                <li>Easy answers</li>
                <li>World Class Certification</li>
            </ol>
            </div>
            </code>
            </div>
            <hr></hr>
           <div>
            <h2 className='topics'>Topics </h2>
           
           <div className="topicsContainer">
           {
                subjects.map(subject => <Subject
                key={subject.id}
                subject = {subject}
               
                ></Subject>)
             }
           </div>
           </div>
        </div>
    );
};

export default Home;