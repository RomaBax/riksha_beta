import { createBrowserRouter } from "react-router-dom";
import { Products } from "../pages/Product";
import { Basket } from "../pages/Basket";
import { Layout } from "../layout/layout";
import { Box } from "@chakra-ui/react";
import Dostavka from "../components/Dostavka";
import Pizza_Str from "../components/Pizza_Str";
import Sushi_str from "../components/Sushi_str";

export const router = createBrowserRouter([
    
    {
        element:<Layout/>,
        children:[
    {
        path:'/',
        element:<Products/>
    },
    {
        path:'/basket',
        element:<Basket/>
    },
    {
        path:'/dostavka',
        element:<Dostavka/>
    },
    {
        path:'/Pizza',
        element:<Pizza_Str/>
    },
    {
        path:'/Sushi',
        element:<Sushi_str/>
    }
]
}
])