
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';

import QuesByTopic from './Components/QuesByTopic/QuesByTopic';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Statics from './Components/Statics/Statics';




function App() {
  const router = createBrowserRouter(
    [
      {
        path : '/' , element : <Main></Main> , children : [
          {
            path : '/' ,
            loader : async() => fetch('https://openapi.programming-hero.com/api/quiz')
            ,
             element : <Home></Home>
          },
          {
            path : '/home'  ,
            loader : async() => fetch('https://openapi.programming-hero.com/api/quiz')
            ,
            element : <Home></Home>
          },
          {
            path : 'statics' ,
            loader : async() => fetch('https://openapi.programming-hero.com/api/quiz') , 
            element :<Statics></Statics>
          },
          {
            path : '/blog' , element : <Blog></Blog>
          }, 
         
          {
            path : '/home/ques/:id' ,
            
            loader : async({params}) => {
              return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            }
             , element : <QuesByTopic></QuesByTopic> 
          }
        ]
      }, 
      {
        path: '*' , element : <ErrorPage></ErrorPage>
      }
    ]
  )

 


  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
