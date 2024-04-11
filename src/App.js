import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ListItem from "./Components/ListItem/ListItem";
import Navbar from "./Components/Navbar/Navbar";
import Layout from "./Components/Layout/Layout";
import Profile from "./Components/Profile/Profile";
import Transactions from "./Components/Transactions/Transactions";
import Notfound from "./Components/Notfound/Notfound";

const routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Transactions /> },
      { path: "profile", element: <Profile /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routers}>
        <ListItem />
      </RouterProvider>
    </>
  );
}

export default App;
