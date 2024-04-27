import { Helmet } from "react-helmet-async";

const AddCraftItem = () => {
    const handleAddCraft=(e)=>{
        e.preventDefault();

    const name=e.target.select.value;
    console.log(name);
    }
  return (
    <div className="">
      <Helmet>
        <title>Crafted Clarity | AddCraftItem</title>
      </Helmet>
      <div>
        <form className="md:p-10" onSubmit={handleAddCraft}>
          <h1
            className="text-4xl mt-5 mb-4 font-bold text-center 
            text-[#B3C8CF]"
          >
            Add Craft Iteam
          </h1>
          <div className="w-[100%] md:flex gap-10">
            {/* img url */}
            <div className="space-y-1 md:w-[50%] text-sm">
              <label
                htmlFor="img"
                className="block text-[#F1EEDC] dark:text-[#F1EEDC]"
              >
                Useremail
              </label>
              <input
                type="text"
                name="photo"
                id="img"
                placeholder="Photo URL"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-[#B3C8CF] dark:bg-gray-50 text-gray-100 dark:text-[#F1EEDC] focus:border-violet-400 focus:dark:border-violet-600"
              />
            </div>
            {/* item name */}
            <div className="space-y-1 text-sm md:w-[50%]">
              <label
                htmlFor="username"
                className="block text-[#F1EEDC] dark:text-[#F1EEDC]"
              >
                Item name
              </label>
              <input
                type="text"
                name="item"
                id="item"
                placeholder="Item Name"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-[#B3C8CF] dark:bg-gray-50 text-gray-100 dark:text-[#F1EEDC] focus:border-violet-400 focus:dark:border-violet-600"
              />
            </div>
          </div>

          <div className="w-[100%] md:flex gap-10">
            {/* subcategory name */}
            <div className="space-y-1 md:w-[50%] text-sm">
              <label
                htmlFor="categories"
                className="block text-[#F1EEDC] dark:text-[#F1EEDC]"
              >
                Sub Categories Name
              </label>
              <select name="select" required className="select select-bordered   w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-[#B3C8CF] dark:bg-gray-50 text-gray-100 dark:text-[#F1EEDC] focus:border-violet-400 focus:dark:border-violet-600">
                <option disabled selected>
              Select Sub Categories Name
                </option>
                <option value={"Wooden Furniture & Sculptures"}>Wooden Furniture & Sculptures</option>
                <option value={"Wooden Home Decor"}>Wooden Home Decor</option>
                <option value={"Wooden Utensils and Kitchenware"}>Wooden Utensils and Kitchenware</option>
                <option value={"Jute Home Decor"}>Jute Home Decor</option>
                <option value={"Jute Kitchenware & utensils"}>Jute Kitchenware & utensils</option>
                <option value={"Jute and wooden jewellery"}>Jute and wooden jewellery</option>
              </select>
              {/* <input
                // type="select"
                // name="photo"
                // id="img"
                // placeholder="Photo URL"

                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-[#B3C8CF] dark:bg-gray-50 text-gray-100 dark:text-[#F1EEDC] focus:border-violet-400 focus:dark:border-violet-600"
              /> */}
             
            </div>
            {/* price  */}
            <div className="space-y-1 text-sm md:w-[50%]">
              <label
                htmlFor="price"
                className="block text-[#F1EEDC] dark:text-[#F1EEDC]"
              >
                 Price

              </label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="price"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-[#B3C8CF] dark:bg-gray-50 text-gray-100 dark:text-[#F1EEDC] focus:border-violet-400 focus:dark:border-violet-600"
              />
            </div>
          </div>

          <div className="w-[100%] md:flex gap-10">
            {/* customization name */}
            <div className="space-y-1 md:w-[50%] text-sm">
              <label
                htmlFor="categories"
                className="block text-[#F1EEDC] dark:text-[#F1EEDC]"
              >
               customization
              </label>
              <select name="select" required className="select select-bordered   w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-[#B3C8CF] dark:bg-gray-50 text-gray-100 dark:text-[#F1EEDC] focus:border-violet-400 focus:dark:border-violet-600">
                <option disabled selected>
                customization
                </option>
                <option value={"Yes"}>Yes</option>
                <option value={"No"}>No</option>
                
              </select>
          
             
            </div>
            {/* rating  */}
            <div className="space-y-1 text-sm md:w-[50%]">
              <label
                htmlFor="price"
                className="block text-[#F1EEDC] dark:text-[#F1EEDC]"
              >
                rating


              </label>
              <input
                type="number"
                name="rating"
                id="rating"
                placeholder="rating"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-[#B3C8CF] dark:bg-gray-50 text-gray-100 dark:text-[#F1EEDC] focus:border-violet-400 focus:dark:border-violet-600"
              />
            </div>
          </div>


          <div className="w-[100%] md:flex gap-10">
            {/*  stockStatus */}
            <div className="space-y-1 md:w-[50%] text-sm">
              <label
                htmlFor="categories"
                className="block text-[#F1EEDC] dark:text-[#F1EEDC]"
              >
               stockStatus
              </label>
              <select name="select" required className="select select-bordered   w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-[#B3C8CF] dark:bg-gray-50 text-gray-100 dark:text-[#F1EEDC] focus:border-violet-400 focus:dark:border-violet-600">
                <option disabled selected>
                stockStatus
                </option>
                <option value={" In stock"}> In stock</option>
                <option value={"Made to Order"}>Made to Order</option>
                
              </select>
          
             
            </div>
            {/*  processing time  */}
            <div className="space-y-1 text-sm md:w-[50%]">
              <label
                htmlFor="price"
                className="block text-[#F1EEDC] dark:text-[#F1EEDC]"
              >
                processing time


              </label>
              <input
                type="text"
                name="processing_time"
                id="processing_time"
                placeholder="processing_time"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-[#B3C8CF] dark:bg-gray-50 text-gray-100 dark:text-[#F1EEDC] focus:border-violet-400 focus:dark:border-violet-600"
              />
            </div>
          </div>
          {/* <input type="submit" value="submit" /> */}
        </form>
      </div>
    </div>
  );
};

export default AddCraftItem;
