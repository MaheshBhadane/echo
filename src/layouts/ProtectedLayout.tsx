import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  return (
    <>
      <main>
        <Navbar />
        <div style={{ paddingTop: "70px" }}>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default ProtectedLayout;
