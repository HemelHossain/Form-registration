import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Registration from './Components/Registration/Registration';
import LogIn from './Components/LogIn/LogIn';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/registration",
          element: <Registration></Registration>
        },
        {
          path: "/login",
          element: <LogIn></LogIn>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
