import React, { Suspense, lazy } from "react";
import Loading from "../components/Loading";
const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Terms = lazy(() => import("../pages/Terms"));
const FindId =  lazy(() => import("../pages/FindId"));
const FindPw =  lazy(() => import("../pages/FindPw"));

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
    {
      path: "/findid",
      element: (
        <Suspense fallback={<Loading />}>
          <FindId />
        </Suspense>
      ),
    },
    {
      path: "/findpw",
      element: (
        <Suspense fallback={<Loading />}>
          <FindPw />
        </Suspense>
      ),
    },
  ];
};

export default nonmemberRouter;
