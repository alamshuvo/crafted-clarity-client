import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArtAndCraftCategories = () => {
  const [dataa, setDataa] = useState([]);

  useEffect(() => {
    fetch(`https://crafted-clarity-server.vercel.app/categories`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataa(data);
      });
  }, []);
  // const another=dataa.map(anotherItem=>{setA(anotherItem)})
  return (
    <Link>
      <div>
        <div className="text-center md:text-3xl text-2xl font-bold ">
          <h1>Art & Craft Categories</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-[90%] mx-auto gap-4 mt-10">
          {dataa.map((item) => (
            <Link
              to={`craft/categories/${item.subcategory_name}`}
              key={item._id}
              className=" p-6 rounded-md shadow-md  dark:bg-gray-50 text-[#E5DDC5]  dark:text-gray-900"
            >
              <img
                src={item.image}
                alt={item.subcategory_name}
                className="object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                {/* <span className="block text-xs font-medium tracking-widest uppercase text-violet-400 dark:text-violet-600">{item.subcategory_name.slice(0,5)}</span> */}
                <h2 className="text-xl font-semibold tracking-wide">
                  <small className="text-[#49243E]">Subcategories Name: </small>
                  {item.subcategory_name}
                </h2>
              </div>
              <p className="text-[#E9C874]">{item.origins}</p>
            </Link>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ArtAndCraftCategories;
