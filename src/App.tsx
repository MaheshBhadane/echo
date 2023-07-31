import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { protectedRoutes, publicRoutes } from "@/Routes";
import Cookies from "js-cookie";

const App = () => {
  const authUser = Cookies.get("authUser");
  const routes = authUser ? protectedRoutes : publicRoutes;
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
