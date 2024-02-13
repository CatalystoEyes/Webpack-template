import { jsx as _jsx } from "react/jsx-runtime";
import { App } from './components/App';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import React, { Suspense } from 'react';
import { About } from './components/Pages/About';
import { Shop } from './components/Pages/Shop';
var router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(App, {}),
        children: [
            {
                path: '/about',
                element: _jsx(Suspense, { fallback: "Loading...", children: _jsx(About, {}) })
            }, {
                path: '/shop',
                element: _jsx(Suspense, { fallback: "Loading...", children: _jsx(Shop, {}) })
            }
        ]
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(RouterProvider, { router: router }) }));
