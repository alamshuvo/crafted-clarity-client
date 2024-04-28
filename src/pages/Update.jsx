import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const data = useLoaderData();
  console.log(data);
  const handleAddCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const item = form.item.value;
    const selectCategory = form.select.value;
    const price = form.price.value;
    const customization = form.selecta.value;
    const rating = form.rating.value;
    const stockStatus = form.selectb.value;
    const processing_time = form.processing_time.value;
    const description = form.description.value;
    const name = data?.displayName;
    const email = data?.email;
    const uid = data?.uid;
    const updatedCraft = {
      photo,
      item,
      selectCategory,
      price,
      customization,
      rating,
      stockStatus,
      processing_time,
      description,
      name,
      email,
      uid,
    };
    //  console.log(craft);
    // sent data to the server
    fetch(`http://localhost:5000/craft/id/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        
        
        if (data.modifiedCount > 0) {
        
          Swal.fire({
            icon: "success",
            title: "Wow...",
            text: "Your craft iteam updated Data Sucessfully!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      });

    // console.log(name);
  };

  return (
    <div className="">
      <Helmet>
        <title>Crafted Clarity | Update </title>
      </Helmet>
      <div>
        <form className="md:p-10" onSubmit={handleAddCraft}>
          <h1
            className="text-4xl mt-5 mb-4 font-bold text-center 
            text-[#B3C8CF]"
          >
            Update {data.item} Iteam
          </h1>
          <div className="w-[100%] md:flex gap-10">
            {/* img url */}
            <div className="space-y-1 md:w-[50%] text-sm">
              <label
                htmlFor="img"
                className="block text-[#F1EEDC] dark:text-[#F1EEDC]"
              >
                Item Photo URL
              </label>
              <input
                type="text"
                name="photo"
                id="img"
                defaultValue={data.photo}
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
                defaultValue={data.item}
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
                {data.selectCategory}
              </label>
              <select
                name="select"
                required
                className="select select-bordered   w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-[#B3C8CF] dark:bg-gray-50 text-gray-100 dark:text-[#F1EEDC] focus:border-violet-400 focus:dark:border-violet-600"
              >
                <option disabled selected>
                  Select Sub Categories Name
                </option>
                <option defaultValue={"Wooden Furniture & Sculptures"}>
                  Wooden Furniture & Sculptures
                </option>
                <option defaultValue={"Wooden Home Decor"}>Wooden Home Decor</option>
                <option defaultValue={"Wooden Utensils and Kitchenware"}>
                  Wooden Utensils and Kitchenware
                </option>
                <option defaultValue={"Jute Home Decor"}>Jute Home Decor</option>
                <option defaultValue={"Jute Kitchenware & utensils"}>
                  Jute Kitchenware & utensils
                </option>
                <option defaultValue={"Jute and wooden jewellery"}>
                  Jute and wooden jewellery
                </option>
              </select>
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
                defaultValue={data.price}
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
              <select
                name="selecta"
                required
                className="select select-bordered   w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-[#B3C8CF] dark:bg-gray-50 text-gray-100 dark:text-[#F1EEDC] focus:border-violet-400 focus:dark:border-violet-600"
              >
                <option disabled selected>
                  {data.customization}
                </option>
                <option defaultValue={"Yes"}>Yes</option>
                <option defaultValue={"No"}>No</option>
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
                defaultValue={data.rating}
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
              <select
                name="selectb"
                required
                className="select select-bordered   w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-[#B3C8CF] dark:bg-gray-50 text-gray-100 dark:text-[#F1EEDC] focus:border-violet-400 focus:dark:border-violet-600"
              >
                <option disabled selected>
                  {data.stockStatus}
                </option>
                <option defaultValue={" In stock"}> In stock</option>
                <option defaultValue={"Made to Order"}>Made to Order</option>
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
                defaultValue={data.processing_time}
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-[#B3C8CF] dark:bg-gray-50 text-gray-100 dark:text-[#F1EEDC] focus:border-violet-400 focus:dark:border-violet-600"
              />
            </div>
          </div>

          <div className="w-[100%] md:flex gap-10">
            {/* user name */}
            <div className="space-y-1 md:w-[50%] text-sm">
              <label
                htmlFor="img"
                className="block text-[#F1EEDC] dark:text-[#F1EEDC]"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                // placeholder={user?user.displayName:"User Name"}
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-[#B3C8CF] dark:bg-gray-50 text-gray-100 dark:text-[#F1EEDC] focus:border-violet-400 focus:dark:border-violet-600"
              />
            </div>
            {/* user email*/}
            <div className="space-y-1 text-sm md:w-[50%]">
              <label
                htmlFor="username"
                className="block text-[#F1EEDC] dark:text-[#F1EEDC]"
              >
                {data.email}
              </label>
              <input
                type="Email"
                name="Email"
                id="Email"
                // placeholder={user?user.email:"User email"}
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-[#B3C8CF] dark:bg-gray-50 text-gray-100 dark:text-[#F1EEDC] focus:border-violet-400 focus:dark:border-violet-600"
              />
            </div>
          </div>

          <div className="w-[100%] md:flex gap-10">
            {/* user description */}
            <div className="space-y-1 w-full text-sm">
              <label
                htmlFor="description"
                className="block text-[#F1EEDC] dark:text-[#F1EEDC]"
              >
                short description
              </label>
              <textarea
                id="w3review"
                name="description"
                rows="4"
                cols="50"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-[#B3C8CF] dark:bg-gray-50 text-gray-100 dark:text-[#F1EEDC] focus:border-violet-400 focus:dark:border-violet-600"
              >
                {data.description}
              </textarea>
            </div>
          </div>

          <div className="w-full">
            <input
              type="submit"
              defaultValue="submit"
              className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-[#B3C8CF] dark:bg-gray-50 text-gray-100 dark:text-[#F1EEDC] focus:border-violet-400 focus:dark:border-violet-600 cursor-pointer mt-5 hover:bg-[#F1EEDC] hover:text-[#B3C8CF]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
