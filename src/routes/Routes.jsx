import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AllArtAndCrafts from "../pages/AllArtAndCrafts";
import AddCraftItem from "../pages/AddCraftItem";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      errorElement:<NotFound></NotFound>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/allArtAndCrafts",
            element:<AllArtAndCrafts></AllArtAndCrafts>
        },
        {
            path:"/addCraftItem",
            element:<AddCraftItem></AddCraftItem>
        }
      ]
    },
  ]);

  export default router;