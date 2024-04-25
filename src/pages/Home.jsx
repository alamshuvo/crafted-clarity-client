import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>crafted-clarity | Home</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Home;