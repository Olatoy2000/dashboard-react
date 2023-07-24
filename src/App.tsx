import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const Layout = () => {
    <div className="main">
      <Navbar />
      <div>
        <div className="menuContainer"></div>
        <div className="contactContainer"></div>
      </div>
      <Footer />
    </div>;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "users",
      element: <Users />,
    },
    {
      path: "products",
      element: <Products />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
