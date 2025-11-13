import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './RootLayout/RootLayout.jsx';
import Home from './Pages/Home/Home.jsx';
import Register from './Pages/Register/Register.jsx';
import Login from './Pages/Login/Login.jsx';
import FindPartners from './Pages/FindPartners/FindPartners.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import CreateProfile from './Pages/CreateProfile/CreateProfile.jsx';
import MyConnection from './Pages/MyConnection/MyConnection.jsx';
import PrivateRoute from './Routes/PrivateRoutes.jsx';
import PartnerDetails from './Pages/PartnerDetails/PartnerDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component : RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },
     
      {
        path: '/find-partners',
        Component: FindPartners,
      },
      {
        path: '/partner-details/:id',
        element: <PrivateRoute>
          <PartnerDetails></PartnerDetails>
        </PrivateRoute>,
      },

      {
        path: '/create-partner-profile',
        element: <PrivateRoute>
          <CreateProfile></CreateProfile>
          </PrivateRoute>,
      },
      {
        path: '/my-connections',
       
        element: <PrivateRoute>
          <MyConnection></MyConnection>
        </PrivateRoute>,
      },
    
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      
        <RouterProvider router={router} />
      
    </AuthProvider>
  </StrictMode>,
)
