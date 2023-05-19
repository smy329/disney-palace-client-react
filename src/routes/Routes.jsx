import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddToy from '../pages/AddToy';
import AllToys from '../pages/AllToys';
import MyToys from '../pages/MyToys';
import Blog from '../pages/Blog';
import Error from '../pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/add-toy',
        element: <AddToy />,
      },
      {
        path: '/all-toys',
        element: <AllToys />,
      },
      {
        path: '/my-toys',
        element: <MyToys />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ],
  },
  {
    path: '/404',
    element: <Error />,
  },
]);

export default router;
