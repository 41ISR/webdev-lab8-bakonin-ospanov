import { createBrowserRouter } from "react-router-dom"
import SignUp from "../pages/SignUp"
import SignIn from "../pages/SignIn/"
import Layout from "../pages/Layout"
import Board from "../pages/Board"

export const router = createBrowserRouter(
    [
        {
            path: "/signup",
            element: <SignUp />
        },  
        {
            path: "/signin",
            element: <SignIn />
        },
        {
            path: "/",
            element: <Layout />,

        }
    ]
)

// https://prod.liveshare.vsengsaas.visualstudio.com/join?63042DD39097D1B5CDF7965CC6714AC76A31