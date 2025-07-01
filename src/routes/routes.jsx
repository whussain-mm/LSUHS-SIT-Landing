import { Dashboard, Events } from '@/pages';
import MainLayout from '../layout/MainLayout';
import { Navigate } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <MainLayout />, 
    children: [

      {
        path: '/',
        element: <Dashboard />,
        roles: ['admin', 'user']
      },
      {
        path: '/events',
        element: <Events />,
        roles: ['admin', 'user']
      },
    ]
  },
];

export default routes;