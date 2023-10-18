import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { createHashRouter, RouterProvider} from 'react-router-dom';
import { Root } from './Root.tsx';
import { Template } from './puzzles/Template.tsx';
import { puzzleIndex2015 } from './puzzles/2015/puzzleIndex2015.tsx';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>Bad Route</div>,
    children: [
      {
        path: 'template',
        element: <Template />
      },
      {
        path: '2015',
        children: [
          ...(puzzleIndex2015.map((item, index) => (
            {
              ...item,
              path: `${index+1}`
            }
          )))
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
