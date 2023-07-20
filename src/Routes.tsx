import Home from "./pages/Home";
import ProtectedLayout from "./layouts/ProtectedLayout";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";
import PageNotFound from "./pages/ErrorPages/PageNotFound";
import Profile from "./pages/Profile";
import Loader from "./components/UI/Loader";

export const publicRoutes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <Login /> }],
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
