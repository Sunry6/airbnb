import React from 'react';
import { Navigate } from 'react-router-dom';

const Home = React.lazy(() => import('@/pages/Home'));
const Entire = React.lazy(() => import('@/pages/Entire'));
const Detail = React.lazy(() => import('@/pages/Detail'));

const routes = [
	{
		path: '/',
		element: <Navigate to="/home" />,
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/entire',
		element: <Entire />,
	},
	{
		path: '/detail',
		element: <Detail />,
	},
];

export default routes;
