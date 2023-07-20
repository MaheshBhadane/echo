import { Outlet } from "react-router-dom";
import ErrorBoundary from "../pages/ErrorPages/ErrorBoundary";

const RootLayout = () => {
  return (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  );
};

export default RootLayout;
