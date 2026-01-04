import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './Layout/RootLayout.jsx'
import Home from './Pages/Home/Home.jsx';
import Register from './Pages/Register/Register.jsx';
import Login from './Pages/Login/Login.jsx';
import FindPartners from './Pages/FindPartners/FindPartners.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivateRoute from './Routes/PrivateRoutes.jsx';
import PartnerDetails from './Pages/PartnerDetails/PartnerDetails.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import NotFound from './Components/NoFound/NoFound.jsx';
import About from './Pages/About/About.jsx';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy.jsx';
import TermsAndConditions from './Pages/TermsAndConditions/TermsAndConditions.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import DashboardLayout from './Layout/DashboardLayout.jsx';
import DashboardHome from './Pages/DashboardHome/DashboardHome.jsx';
import MyConnections from './Pages/MyConnection/MyConnection.jsx';
import CreatePartnerProfile from './Pages/CreateProfile/CreateProfile.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
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
        path: '/about',
        Component: About,
      },
      {
        path: '/privacy-policy',
        Component: PrivacyPolicy,
      },
      {
        path: '/contact',
        Component: Contact,
      },
      {
        path: '/terms-and-conditions',
        Component: TermsAndConditions,
      },
     
      {
        path: '/find-partners',
        Component: FindPartners,
      },
      {
        path: '/partner-details/:id',
        element: <PartnerDetails></PartnerDetails>,
      },

      {
        path: '/profile',
       
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>,
      },
      {
        path: '*',
        Component: NotFound,
      }
    
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children:[
      {
        path:'/dashboard/overview',
        Component:DashboardHome
      },
      {
        path: '/dashboard/my-connections',
        Component: MyConnections
      },
      {
        path: '/dashboard/create-partner-profile',
        Component: CreatePartnerProfile
      }
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      
        <RouterProvider router={router} />
      
    </AuthProvider>
  </StrictMode>,
)
