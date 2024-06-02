import React, { Suspense, lazy } from "react";
import Loading from "../components/Loading";
import termsDetailRouter from "./termsDetailRouter";
const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));
const FindAccount = lazy(() => import("../pages/FindAccount"));
const NoMemberPassChange = lazy(() => import("../pages/NoMemberPassChange"));

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

      children: termsDetailRouter(),
    },
    {
      path: "/findaccount",
      element: (
        <Suspense fallback={<Loading />}>
          <FindAccount />
        </Suspense>
      ),
    },
    {
      path: "/findpass",
      element: (
        <Suspense fallback={<Loading />}>
          <NoMemberPassChange />
        </Suspense>
      ),
    },
  ];
};

export default nonmemberRouter;
