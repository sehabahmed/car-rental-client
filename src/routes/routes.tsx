import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllCars from "../pages/Cars/AllCars";
import SearchAvailableCars from "../pages/Cars/SearchAvailableCars";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/cars',
                element: <AllCars/>
            },
            {
                path: '/cars/search',
                element: <SearchAvailableCars/>
            },
        ]
    }
])

export default router;