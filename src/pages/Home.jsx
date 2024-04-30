import { Helmet } from "react-helmet-async";
import Slider from "../components/Slider/Slider";
import { Typewriter } from "react-simple-typewriter";
import { useLoaderData } from "react-router-dom";
import CraftItems from "../components/CraftItems/CraftItems";
import MeetOurTeam from "../components/MeetOurTeam/MeetOurTeam";
import OurBigDeal from "../components/OurBigDeal/OurBigDeal";
import ArtAndCraftCategories from "../components/ArtAndCraftCategories/ArtAndCraftCategories";

const Home = () => {
  const craftedData=useLoaderData()
  console.log(craftedData);
    const handleType = (count, number) => {
        // access word count number
        // console.log(count)
    }
      
    
      const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }
    
  return (
    <div className="min-h-screen mt-2 space-y-20">
      <Helmet>
        <title>crafted-clarity | Home</title>
      </Helmet>
      <div className="w-[100%] flex gap-10 flex-col md:flex-row ">
        <div className="md:w-[70%] w-full">
          <Slider></Slider>
        </div>
        <div className="md:w-[30%] p-5 md:p-10">
          <img
            src="https://i.ibb.co/xGznPv9/19585203-pd109-pdobj00336a-image.jpg"
            className="w-full"
            alt=""
          />
          <h1
            style={{
              paddingTop: "1rem",
              margin: "auto 0",
              fontWeight: "bold",
            }}
          >
            jute & wooden Crafts{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Wooden Furniture & Sculptures", "Wooden Home Decor", "Wooden Utensils and Kitchenware", "Jute Home Decor","Jute Kitchenware & utensils","Jute and wooden jewellery"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </h1>
        </div>
      </div>
      <div className="mt-10 ">
      <CraftItems craftedData={craftedData}></CraftItems>
      </div>
      <div className="mt-10 mb-10">
        <ArtAndCraftCategories></ArtAndCraftCategories>
      </div>
      <div className="mt-10 mb-10">
        <MeetOurTeam></MeetOurTeam>
      </div>
      <div className="mt-10 mb-10">
        <OurBigDeal ></OurBigDeal>
      </div>
    </div>
  );
};

export default Home;
