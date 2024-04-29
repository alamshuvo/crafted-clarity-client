import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
// import ReactShadowScroll from 'react-shadow-scroll';
import { ScrollRestoration } from "react-router-dom";



const Mainlayout = () => {
    return (
     
        <div className="font-roboto">
            <div className="sticky z-[100] top-0 ">
                <Navbar></Navbar>
            </div>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
            <ScrollRestoration/>
        </div>
       
    );
};

export default Mainlayout;