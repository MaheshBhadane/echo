import Home from "./pages/Home";
import ProtectedLayout from "./layouts/ProtectedLayout";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";
import PageNotFound from "./components/PageNotFound";
import Profile from "./pages/Profile";

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

export const authRoutes = [
    {
        path: "/",
        element: <ProtectedLayout />,
        loader: () => <>Loading...</>,
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
