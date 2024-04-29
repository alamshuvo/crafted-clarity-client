import { Link, useLoaderData } from "react-router-dom";

const SubcategoriesMatchData = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="text-center md:text-3xl text-2xl font-bold ">
        <h1>Art & Craft Categories</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-[90%] mx-auto gap-4 mt-10 mb-10">
        {data.map((item) => (
          <div
            key={item._id}
            className=" p-6 rounded-md shadow-md  dark:bg-gray-50 text-[#E5DDC5]  dark:text-gray-900 space-y-8"
          >
            <img
              src={item.photo}
              alt={item.selectCategory}
              className="object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2 flex flex-col ">
              {/* <span className="block text-xs font-medium tracking-widest uppercase text-violet-400 dark:text-violet-600">{item.subcategory_name.slice(0,5)}</span> */}
              <div className="">
                <h2 className="text-xl font-semibold tracking-wide">
                  <small className="text-[#49243E]">Subcategories Name: </small>
                  {item.selectCategory}
                </h2>
                <p className="text-[#B0578D]">Item Name: {item.item}</p>
                <p className="text-[#D988B9]">
                  <small className="text-blue-400">Description</small>{" "}
                  {item.description.slice(1, 60)}
                </p>
              </div>
              <div className="flex justify-between text-[#B0578D] mt-10">
                <p>Price:{item.price}</p>
                <p>Rating:{item.rating}</p>
              </div>
             <div className="grow-1">
             <h1>Processing Time :{item.processing_time}</h1>
              <Link to={`/viewdetails/${item._id}`}><button className="btn">View Details</button></Link>
             </div>
            </div>
        
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubcategoriesMatchData;
