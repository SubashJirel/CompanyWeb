import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import About from './components/about/About.jsx';
import Home from './components/Home/Home.jsx';
import Services from './components/services/Services.jsx';
import Career from './components/career/Career.jsx';
import Blogs from './components/blogs/Blogs.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'career',
        element: <Career />,
      },
      {
        path: 'blogs',
        element: <Blogs />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
