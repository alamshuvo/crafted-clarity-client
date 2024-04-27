import { Link } from "react-router-dom";

const CraftItems = ({ craftedData }) => {
  console.log(craftedData);
  return (
    <div className="mt-10">
      <h1 className="text-center font-bold md:text-3xl  text-xl">
        Craft Items
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mb-5 md:w-[90%] mx-auto p-5">
        {
            craftedData.map(craft=><div key={craft._id} className="card card-compact w-full bg-[#F1EEDC] p-5  shadow-xl">
            <figure><img src={craft.photo} alt={craft.name} className="h-[400px]" /></figure>
            <div className="card-body">
              <h2 className="card-title">{craft.item}</h2>
              <p>{craft.description}</p>
              <div className="flex justify-between">
                <div> stockStatus :{craft.stockStatus}</div>
                <div> price :{craft.price}</div>
              </div>
              <div className="card-actions mt-2">
               <Link to={`/viewdetails/${craft._id}`}>
               <button className="btn bg-[#BED7DC]">View Details</button>
               </Link>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default CraftItems;
