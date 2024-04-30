import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/Loading";

const Layout = lazy(() => import("../pages/Layout"));
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const MenuCart = lazy(() => import("../pages/MenuCart"));
const MenuDetail = lazy(() => import("../pages/MenuDetail"));
const MyPage = lazy(() => import("../pages/MyPage"));
const Order = lazy(() => import("../pages/Order"));
const OrderList = lazy(() => import("../pages/OrderList"));
const OrderStatus = lazy(() => import("../pages/OrderStatus"));
const Favorite = lazy(() => import("../pages/Favorite"));
const Payment = lazy(() => import("../pages/Payment"));
const Resign = lazy(() => import("../pages/Resign"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Terms = lazy(() => import("../pages/Terms"));
const UserInfo = lazy(() => import("../pages/UserInfo"));
const Community = lazy(() => import("../pages/Community"));
const PasswordChange = lazy(() => import("../pages/PasswordChange"));
const NotFound = lazy(() => import("../pages/NotFound"));

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<Loading />}>
            <MenuCart />
          </Suspense>
        ),
      },
      {
        path: "menudetail",
        element: (
          <Suspense fallback={<Loading />}>
            <MenuDetail />
          </Suspense>
        ),
      },
      {
        path: "mypage",
        element: (
          <Suspense fallback={<Loading />}>
            <MyPage />
          </Suspense>
        ),
      },
      {
        path: "order",
        element: (
          <Suspense fallback={<Loading />}>
            <Order />
          </Suspense>
        ),
      },
      {
        path: "orderlist",
        element: (
          <Suspense fallback={<Loading />}>
            <OrderList />
          </Suspense>
        ),
      },
      {
        path: "orderstatus",
        element: (
          <Suspense fallback={<Loading />}>
            <OrderStatus />
          </Suspense>
        ),
      },
      {
        path: "favorite",
        element: (
          <Suspense fallback={<Loading />}>
            <Favorite />
          </Suspense>
        ),
      },
      {
        path: "payment",
        element: (
          <Suspense fallback={<Loading />}>
            <Payment />
          </Suspense>
        ),
      },
      {
        path: "resign",
        element: (
          <Suspense fallback={<Loading />}>
            <Resign />
          </Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={<Loading />}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "terms",
        element: (
          <Suspense fallback={<Loading />}>
            <Terms />
          </Suspense>
        ),
      },
      {
        path: "userinfo",
        element: (
          <Suspense fallback={<Loading />}>
            <UserInfo />
          </Suspense>
        ),
      },
      {
        path: "community",
        element: (
          <Suspense fallback={<Loading />}>
            <Community />
          </Suspense>
        ),
      },
      {
        path: "passchange",
        element: (
          <Suspense fallback={<Loading />}>
            <PasswordChange />
          </Suspense>
        ),
      },
    ],
  },
]);

export default rootRouter;
