import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import DonateNow from "../Pages/DonateNow";
import Details from "../Pages/Details";
import Statistics from "../Pages/Statistics";

const myCreatedRoute = createBrowserRouter([
    {

        path:'/' ,
        element: <MainLayout></MainLayout> ,
        children: [
            {
                path: '/' ,
                element: <Home></Home> ,
                loader: () => fetch('/donation.json')
            },
            {
                path: '/donateNow' ,
                element: <DonateNow></DonateNow>
            },
            {
                path: '/details/:id' ,
                element: <Details></Details>,
                loader: () => fetch('/donation.json')
            },
            {
                path: '/statistics' ,
                element: <Statistics></Statistics>
            },
        ]

    }
])

export default myCreatedRoute;