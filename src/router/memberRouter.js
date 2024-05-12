import React, { Suspense, lazy } from "react";
import Loading from "../components/Loading";

const Home = lazy(() => import("../pages/Home"));
const MenuCart = lazy(() => import("../pages/MenuCart"));
const MenuDetail = lazy(() => import("../pages/MenuDetail"));
const MyPage = lazy(() => import("../pages/MyPage"));
const Order = lazy(() => import("../pages/Order"));
const OrderList = lazy(() => import("../pages/OrderList"));
const OrderListDetail = lazy(() => import("../pages/OrderListDetail"));
const OrderStatus = lazy(() => import("../pages/OrderStatus"));
const Favorite = lazy(() => import("../pages/Favorite"));
const Payment = lazy(() => import("../pages/Payment"));
const Resign = lazy(() => import("../pages/Resign"));
const UserInfo = lazy(() => import("../pages/UserInfo"));
const Community = lazy(() => import("../pages/Community"));
const PasswordChange = lazy(() => import("../pages/PasswordChange"));
const Search = lazy(() => import("../pages/Search"));

const memberRouter = () => {
  return [
    {
      path: "/home",
      element: (
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/cart",
      element: (
        <Suspense fallback={<Loading />}>
          <MenuCart />
        </Suspense>
      ),
    },
    {
      path: "/menudetail/:cate/:menu_id/:name",
      element: (
        <Suspense fallback={<Loading />}>
          <MenuDetail />
        </Suspense>
      ),
    },
    {
      path: "/mypage",
      element: (
        <Suspense fallback={<Loading />}>
          <MyPage />
        </Suspense>
      ),
    },
    {
      path: "/order",
      element: (
        <Suspense fallback={<Loading />}>
          <Order />
        </Suspense>
      ),
    },
    {
      path: "/orderlist",
      element: (
        <Suspense fallback={<Loading />}>
          <OrderList />
        </Suspense>
      ),
    },
    {
      path: "/orderlist-detail",
      element: (
        <Suspense fallback={<Loading />}>
          <OrderListDetail />
        </Suspense>
      ),
    },
    {
      path: "/orderstatus",
      element: (
        <Suspense fallback={<Loading />}>
          <OrderStatus />
        </Suspense>
      ),
    },
    {
      path: "/favorite",
      element: (
        <Suspense fallback={<Loading />}>
          <Favorite />
        </Suspense>
      ),
    },
    {
      path: "/payment",
      element: (
        <Suspense fallback={<Loading />}>
          <Payment />
        </Suspense>
      ),
    },
    {
      path: "/resign",
      element: (
        <Suspense fallback={<Loading />}>
          <Resign />
        </Suspense>
      ),
    },
    {
      path: "/userinfo",
      element: (
        <Suspense fallback={<Loading />}>
          <UserInfo />
        </Suspense>
      ),
    },
    {
      path: "/community",
      element: (
        <Suspense fallback={<Loading />}>
          <Community />
        </Suspense>
      ),
    },
    {
      path: "/passchange",
      element: (
        <Suspense fallback={<Loading />}>
          <PasswordChange />
        </Suspense>
      ),
    },
    {
      path: "/search",
      element: (
        <Suspense fallback={<Loading />}>
          <Search />
        </Suspense>
      ),
    },
  ];
};

export default memberRouter;
