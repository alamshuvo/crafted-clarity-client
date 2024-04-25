import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../pages/Footer";

const Mainlayout = () => {
    return (
        <div>
            <div>
                <Home></Home>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Mainlayout;