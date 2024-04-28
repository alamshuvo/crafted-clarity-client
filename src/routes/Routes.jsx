import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AllArtAndCrafts from "../pages/AllArtAndCrafts";
import AddCraftItem from "../pages/AddCraftItem";
import MyArtAndCraftList from "../pages/MyArtAndCraftList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ViewDetails from "../pages/ViewDetails";
import PrivateRoutes from "./PrivateRoutes";
import Update from "../pages/Update";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      errorElement:<NotFound></NotFound>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch("http://localhost:5000/craft")
        },
        {
            path:"/allArtAndCrafts",
            element:<AllArtAndCrafts></AllArtAndCrafts>,
            loader:()=>fetch("http://localhost:5000/craft")
        },
        {
            path:"/addCraftItem",
            element:<PrivateRoutes>
              <AddCraftItem></AddCraftItem>
            </PrivateRoutes>
        },
        {
            path:"/myArtAndCraftList",
            element:<PrivateRoutes>
              <MyArtAndCraftList></MyArtAndCraftList>
            </PrivateRoutes>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/viewdetails/:id",
          element:<PrivateRoutes>
            <ViewDetails></ViewDetails>
          </PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/craft/id/${params.id}`)
        },
        {
          path:"/update/:id",
          element:<PrivateRoutes>
            <Update></Update>
          </PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/craft/id/${params.id}`)
          
          // element:<PrivateRoutes>
          //   <Update></Update>
          // </PrivateRoutes>
        }
      ]
    },
  ]);

  export default router;