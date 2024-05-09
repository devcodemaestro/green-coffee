import React, { Suspense, lazy } from "react";
import Loading from "../components/Loading";

const SignUp = lazy(() => import("../pages/SignUp"));
const Terms = lazy(() => import("../pages/Terms"));
const Detail1 = lazy(() => import("../pages/termsDetails/Detail1"));
const Detail2 = lazy(() => import("../pages/termsDetails/Detail2"));
const Detail3 = lazy(() => import("../pages/termsDetails/Detail3"));

const termsDetailRouter = () => {
  return [
    {
      path: "",
      element: (
        <Suspense fallback={<Loading />}>
          <Terms />
        </Suspense>
      ),
    },
    {
      path: "detail1",
      element: (
        <Suspense fallback={<Loading />}>
          <Detail1 />
        </Suspense>
      ),
    },
    {
      path: "detail2",
      element: (
        <Suspense fallback={<Loading />}>
          <Detail2 />
        </Suspense>
      ),
    },
    {
      path: "detail3",
      element: (
        <Suspense fallback={<Loading />}>
          <Detail3 />
        </Suspense>
      ),
    },
  ];
};

export default termsDetailRouter;
