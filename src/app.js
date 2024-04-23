import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './components/Homepage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage/>
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