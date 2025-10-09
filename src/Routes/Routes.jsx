import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import ErrorBoundary from "../Pages/ErrorBoundary";
import AppDetails from "../Pages/App Details/AppDetails";
import ErrorForApp from "../Pages/ErrorForApp";
import { getDataFromLs } from "../Utilities/Utility";


 const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorBoundary></ErrorBoundary>,
    hydrateFallbackElement: <h1>Error 200</h1>,
    children: [
        {
            index: true,
            loader: () => fetch('/data.json'),
            Component: Home
        },
        {
            path: '/apps',
            loader: () => fetch('/data.json'),
            Component: Apps,
        },
        {
            path: '/intallation',
            loader: () => getDataFromLs(),
            Component: Installation,
        },
        {
            path: '/appdetails/:id',
            loader: () => fetch("/data.json"),
            Component: AppDetails,
            errorElement: <ErrorForApp></ErrorForApp>
        }
    ]
  },

]);


export default router