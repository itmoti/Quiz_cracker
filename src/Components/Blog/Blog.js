import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='ques-box'>
         <div>
            <h1>1. What is the purpose of react router ?</h1>
           <p> <span >Ans.  </span>  React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
         </div>
         <div>
            <h1>2. How does Context API works ?</h1>
            <p><span>Ans.  </span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
         </div>
         <div>
            <h1>3. What is useref in react?</h1>
            <p><span>Ans. </span> The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
         </div>
        </div>
    );
};

export default Blog;