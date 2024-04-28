import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const MyArtAndCraftList = () => {
  const { user } = useContext(AuthContext) || {};
  const [dataa, setDataa] = useState([]);
//   const [sortedData,setSortedData]=useState([]);
  console.log(user.uid);
//   const hadleSort=()=>{
//      const yesdata=dataa.filter(checkYes)
//      setSortedData(yesdata);
//   }
// const checkYes=(a)=>{
//     return a==="Yes"
// }
// console.log(sortedData);
  useEffect(() => {
    fetch(`http://localhost:5000/craft/uid/${user?.uid
  }`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataa(data);
      });
  }, [user]);

  // console.log(dataa);
  return (
    <div className="">
      <Helmet>
        <title> Crafted Clarity | MyArtAndCraftList</title>
      </Helmet>
      <div className="mt-10">
        <h1 className="text-center font-bold md:text-3xl  text-xl">
          My Art And Craft Items : {dataa.length} Items
        </h1>
        {/* filter */}
        <div className="text-center mb-14 mt-5">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Filter By Customization
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button >Yes</button>
              </li>
              <li>
              <button>No</button>
              </li>
            </ul>
          </div>
        </div>
        {/* filter end */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mb-5 md:w-[90%] mx-auto p-5">
          {dataa.map((craft) => (
            <div
              key={craft._id}
              className="card card-compact w-full bg-[#F1EEDC] p-5  shadow-xl"
            >
              <figure>
                <img src={craft.photo} alt={craft.name} className="h-[400px]" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{craft.item}</h2>
                {/* <p>{craft.description}</p> */}
                <div className="flex justify-between">
                  <div> stockStatus :{craft.stockStatus}</div>
                  <div> price :{craft.price}</div>
                </div>
                <p> customization: {craft.customization}</p>
                <p> rating: {craft.rating}</p>
                <div className="card-actions mt-2">
                  {/* <Link to={`/viewdetails/${craft._id}`}>
               <button className="btn bg-[#BED7DC]">View Details</button>
               </Link> */}
                  <button className="btn">Delete</button>
                  <button className="btn">Update</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyArtAndCraftList;
