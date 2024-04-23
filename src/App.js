import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './components/Homepage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage/>,
    },
    {
        path: "/signup",
        element: <Signup/>,
    },
    {
        path: "/login",
        element: <Login/>
    }
])

const App = () => {
    return (
    <>
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
    </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)