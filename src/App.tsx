import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter(
  createRoutesFromElements(
  
  <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Route> 
  )
);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
