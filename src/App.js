import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StoreFront from './components/store/StoreFront';
import './index.css';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <StoreFront/>
      },
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
