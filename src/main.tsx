import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import { Authorization } from './components/authorization/authorization';
import { FilmMore } from './components/film-more/film-more';
import { Provider } from 'react-redux';
import { store } from './components/redux-reduce/store';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/authorization',
                element: <Authorization />,
            },
        ],
    },
    {
        path: '/film-description',
        element: <FilmMore />,
    },
]);

ReactDOM.createRoot(document.getElementById('root1') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
