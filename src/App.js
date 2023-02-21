import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import Homepage from "./routes/Homepage";
import ProductDetails from "./routes/ProductDetails";
import Products from "./routes/Products";
import Root from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "Products", element: <Products /> },
      { path: "products/:productID", element: <ProductDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
