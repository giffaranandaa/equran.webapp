import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import AsmaulHusna from "../pages/asmaulHusna";
import Layout from "../Router/Layout";
import Surat from "../components/Surat";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/asmaul-husna",
          element: <AsmaulHusna />,
        },
        {
          path: "ayat-surat/:suratId",
          element: <Surat />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routes;
