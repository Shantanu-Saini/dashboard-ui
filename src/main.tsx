import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import Landing from './pages/Landing/Landing.tsx';
import Dashborad from './pages/Dashborad/Dashborad.tsx';
import Settings from './pages/Settings/Settings.tsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Landing />
        },
        {
          path: 'dashboard',
          element: <Dashborad />
        },
        {
          path: 'settings',
          element: <Settings />
        }
      ]
    }
  ]
)


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
