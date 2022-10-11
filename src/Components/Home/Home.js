import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header.js/Header';
import Subject from '../Subject/Subject';

const Home = () => {
    const topics = useLoaderData();
    const subjects = topics.data;
    
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