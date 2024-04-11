
import ReactDOM from 'react-dom/client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import Home from './pages/Home'
// import About from './pages/About'
// import PageError from './pages/PageError'


// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Blog from './pages/Blog'
// import BlogsDetail from './pages/BlogsDetail'
import App from './App'






const root = ReactDOM.createRoot(document.getElementById('root'))
// let allRoutes = createBrowserRouter(
//   [
//     {
//       path:'/',
//       element:<Home/>
//     },
//     {
//       path:'about-us',
//       element:<About/>
//     },
//     {
//       path:'course',
//       element:<Course/>
//     },
//     {
//       path:'blog',
//       element:<Blog/>
//     },
//     {
//       path:'blog/:id',
//       element:<BlogsDetail/>
//     },
//     {
//       path:'*',
//       element:<PageError/>
//     }
//   ]
// )
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={allRoutes}/> */}
    <App/>
  </React.StrictMode>,
)