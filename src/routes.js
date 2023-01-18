import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/Home";
import DetailsPage from "./pages/Details";
import FavoritesPage from "./pages/Favorites";
import MoviesPage from "./pages/Movies";
import SeriesPage from "./pages/Series";

export default function Router() {
    const routes = useRoutes([
        {
            path: '',
            element: <Layout />,
            children: [
                { element: <Navigate to="/home" />, index: true },
                { path: 'home', element: <HomePage /> },
                { path: 'details', element: <DetailsPage /> },
                { path: 'favorites', element: <FavoritesPage /> },
                { path: 'movies', element: <MoviesPage /> },
                { path: 'series', element: <SeriesPage /> }
            ],
        }]);
    return routes;
};
