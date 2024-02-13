import { App } from './components/App'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import React, { Suspense } from 'react';
import { About } from './components/Pages/About';
import { Shop } from './components/Pages/Shop';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={"Loading..."}><About /></Suspense>
            }, {
                path: '/shop',
                element: <Suspense fallback={"Loading..."}><Shop /></Suspense>
            }
        ]
    },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);