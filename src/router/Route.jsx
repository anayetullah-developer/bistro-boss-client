import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },

            {
                path: "/menu",
                element: <Menu/>
            },

            {
                path: "/order",
                element: <Order/>,
                children: [
                    {
                        path: ":category",
                        element: <Order/>
                    }
        
                ]
            },

        ]
    }
])

