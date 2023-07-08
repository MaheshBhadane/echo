import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
const RootLayout = lazy(() => import("./layouts/RootLayout"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Hero = lazy(() => import("./pages/Hero"));
const Profile = lazy(() => import("./pages/Profile"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Hero />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<RootLayout />}>
//             <Route index element={<Hero />} />
//             <Route path="home" element={<Home />} />
//             <Route path="login" element={<Login />} />
//             <Route path="profile" element={<Profile />} />
//             <Route path="*" element={<PageNotFound />} />
//           </Route>
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// }

// export default App;
