import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./components/Browse";
import Login from "./components/login";

function App() {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Body />
    },
    {
      path : "browse",
      element: <Browse />
    },
    {
      path : "login",
      element: <Login />
    }
  ])
 

  return (
    <RouterProvider router={approuter} />
    
   
  )
}

export default App
