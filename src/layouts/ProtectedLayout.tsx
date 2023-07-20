import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ErrorBoundary from "../pages/ErrorPages/ErrorBoundary";

const ProtectedLayout = () => {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </ErrorBoundary>
    </>
  );
};

export default ProtectedLayout;
