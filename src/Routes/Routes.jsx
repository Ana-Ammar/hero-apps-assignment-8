import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import ErrorBoundary from "../Pages/ErrorBoundary";
import AppDetails from "../Pages/App Details/AppDetails";


 const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorBoundary></ErrorBoundary>,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
            path: '/apps',
            Component: Apps,
        },
        {
            path: '/intallation',
            Component: Installation,
        },
        {
            path: '/appdetails/:id',
            loader: () => fetch("/data.json"),
            Component: AppDetails,
        }
    ]
  },

]);


export default router