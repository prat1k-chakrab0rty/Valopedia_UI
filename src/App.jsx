import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Maps from "./pages/Maps";
import Agents from "./pages/Agents";
import Weapons from "./pages/Weapons";
import "./style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/maps",
    element: <Maps />,
  },
  {
    path: "/agents",
    element: <Agents />,
  },
  {
    path: "/weapons",
    element: <Weapons />,
  },
]);
function App() {

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
