import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import SignUp from "./Components/Auth/SignUp"
import Login from "./Components/Auth/Login"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "SignUp",
    element: <SignUp />,
  }
]);

function App() {
  return (
  <>
     <RouterProvider router={router} />
  </>
  );
}

export default App;
