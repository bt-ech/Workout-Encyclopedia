import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter  , RouterProvider} from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import Workout from './components/Workout';
import Exercise from './components/Exercise';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <NotFoundPage />
},
{
  path: '/workout/:Workoutid',
  element: <Workout/>,
  errorElement: <NotFoundPage />
},{
  path: "/exercise/:id",
  element: <Exercise />
}
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals