import Home from "./pages/Home";
import ProtectedLayout from "./layouts/ProtectedLayout";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";
import PageNotFound from "./pages/ErrorPages/PageNotFound";
import Profile from "./pages/Profile";
import Loader from "./components/ui/Loader";
import ErrorBoundary from "./pages/ErrorPages/ErrorBoundary";

export const publicRoutes = [
    {
        path: "/",
        element: (
            <ErrorBoundary>
                <RootLayout />
            </ErrorBoundary>
        ),
        children: [{ path: "/", element: <Login /> }],
    },
    {
        path: "*",
        element: (
            <ErrorBoundary>
                <PageNotFound />
            </ErrorBoundary>
        ),
    },
];

export const protectedRoutes = [
    {
        path: "/",
        element: (
            <ErrorBoundary>
                <ProtectedLayout />
            </ErrorBoundary>
        ),
        loader: () => <Loader />,
        children: [
            { path: "/", element: <Home /> },
            { path: "profile", element: <Profile /> },
        ],
    },
    {
        path: "*",
        element: (
            <ErrorBoundary>
                <PageNotFound />
            </ErrorBoundary>
        ),
    },
];