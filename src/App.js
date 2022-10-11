import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import QuesByTopic from './Components/QuesByTopic/QuesByTopic';
import ErrorPage from './Components/ErrorPage/ErrorPage';




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
            path : 'statics' , element : <></>
          },
          {
            path : '/blog' , element : <Blog></Blog>
          }, 
          {
            path : '/about' , element : <About></About>
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
