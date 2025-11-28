import { createBrowserRouter } from "react-router-dom"
import SignUp from "../pages/SignUp"
import SignIn from "../pages/SignIn/"
import Layout from "../pages/Layout"
import Items from "../pages/Items"
import Logout from "../pages/Logout"
import CreateItem from "../pages/createItem"

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
            path: "/Logout",
            element: <Logout />,
        },
        {
            path: "/createItem",
            element: <CreateItem />,
        },
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Items />
                }
            ]
        }
    ]
)