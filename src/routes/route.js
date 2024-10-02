import * as ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);
export const CustomRouter = () => <RouterProvider router={router} />