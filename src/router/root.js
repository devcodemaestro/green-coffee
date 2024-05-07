import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/Loading";
import Layout from "../pages/Layout";
import memberRouter from "./memberRouter";
import nonmemberRouter from "./nonmemberRouter";
import NoLayout from "../pages/NoLayout";
import { PrivateRoutes } from "../components/Private";
import { Interceptor } from "../components/Interceptor";

const NotFound = lazy(() => import("../pages/NotFound"));

const rootRouter = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Loading />}>
        <NoLayout />
      </Suspense>
    ),
    errorElement: <NotFound />,
    children: nonmemberRouter(),
  },
  {
    element: (
      <Suspense fallback={<Loading />}>
        <Interceptor>
          <PrivateRoutes element={<Layout />} />
        </Interceptor>
      </Suspense>
    ),
    errorElement: <NotFound />,
    children: memberRouter(),
  },
]);

export default rootRouter;
