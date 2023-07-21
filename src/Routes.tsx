import { Loader } from "@mantine/core";
import ProtectedLayout from "@/layouts/ProtectedLayout";
import RootLayout from "@/layouts/RootLayout";
import Page500 from "@/pages/ErrorPages/Page500";
import PageNotFound from "@/pages/ErrorPages/PageNotFound";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";


export const publicRoutes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <Login /> }],
    errorElement:<Page500/>
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

export const protectedRoutes = [
  {
    path: "/",
    element: <ProtectedLayout />,
    loader: () => <Loader />,
    errorElement:<Page500/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "profile", element: <Profile /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
