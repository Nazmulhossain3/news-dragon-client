import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import Newslayout from "../layout/Newslayout";
import News from "../pages/News/News/News";
import LoginLayOut from "../layout/LoginlayOut/LoginLayOut";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";

const router = createBrowserRouter([
    {
        path : '/',
        element : <LoginLayOut></LoginLayOut>,
        children : [
            {
                path : '/',
                element : <Navigate to='/category/0'></Navigate>
            },
            {
                path : 'login',
                element :<Login></Login>
            },
          
            {
                path : '/register',
                element : <Register></Register>
            }

        ]
    },
   
   
    {
    path : '/category',
    element :<Main></Main>,
    children : [
       
        {
            path : ':id',
            element : <Category></Category>,
            loader : ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
        }
    ]
   } ,

   {
     path : 'news',
     element : <Newslayout></Newslayout>,
     children : [{
        path : ':id',
        element : <News></News>,
        loader : ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
        
     }]
   }
])

export default router