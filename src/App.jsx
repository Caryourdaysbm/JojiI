import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import ErrorPage from "./Components/ErrorElement/ErrorPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";
import Services from "./Pages/Services";
import RootLayout from "./Components/Layout/RootLayout";
import Index from "./Components/Ui/Index";
import MenuContainer from "./Components/Menu/MenuContainer";
import { useEffect } from "react";
import { loader as getCurrentPageData } from "./Components/Menu/MenuContainer";
import Cart from "./Components/cart/Cart";
import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector((state) => state.cart.showCart);

  // getting menu data from an external API
 // Fetching menu data from an external API
const getData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products/?limit=15");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Transform the fetched data to match the expected structure
    const transformedData = data.map((item) => ({
      _id: item.id.toString(),
      name: item.title,
      photoUrl: item.image,
      category: item.category,
      price: item.price, // Optional if you want to use a different pricing strategy
    }));

    // Store the transformed data in localStorage
    localStorage.setItem("menu", JSON.stringify(transformedData));
  } catch (error) {
    console.error("Failed to fetch data:", error);
    localStorage.setItem("menu", JSON.stringify([])); // Store an empty array as fallback
  }
};

  

  useEffect(() => {
    getData();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            { path: "/", element: <Home /> },
            {
              path: "/menu",
              element: <Menu />,
              children: [
                {
                  index: true,
                  element: <Index />,
                },
                {
                  path: "menu/:menutype",
                  element: <MenuContainer />,
                  loader: getCurrentPageData,
                },
              ],
            },
            { path: "/about", element: <About /> },
            { path: "/login", element: <Login /> },
            { path: "/services", element: <Services /> },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {showCart && <Cart />}
    </>
  );
}

export default App;