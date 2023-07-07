import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom"; 
import Home from "./pages/Home";
import Login from "./pages/Login";
import RootLayout from "./layouts/RootLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home />}/>  
    <Route path='login' element={<Login/>}/>
    <Route path='*' element={<h1>PageNotFound..!!</h1>}/>
    </Route>
    
    )
);

function App() {
  return (
    <>
    <RouterProvider router={router}/></>
  )
}

export default App
