import React, { Suspense, lazy } from "react";
import Loading from "../components/Loading";
const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Terms = lazy(() => import("../pages/Terms"));

const nonmemberRouter = () => {
  return [
    {
      path: "/",
      index: true,
      element: (
        <Suspense fallback={<Loading />}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/signup",
      element: (
        <Suspense fallback={<Loading />}>
          <SignUp />
        </Suspense>
      ),
    },
    {
      path: "/terms",
      element: (
        <Suspense fallback={<Loading />}>
          <Terms />
        </Suspense>
      ),
    },
  ];
};

export default nonmemberRouter;
