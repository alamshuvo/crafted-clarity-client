import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const ViewDetails = () => {
  const handleType = (count, number) => {
    // access word count number
    // console.log(count)
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  const data = useLoaderData();
  console.log(data);
  return (
    <section className="bg-[#B3C8CF] dark:bg-[#F1EEDC] text-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          {/* <h1 className="md:text-5xl font-bold leading-none sm:text-6xl">Ac mattis
                    <span className="text-violet-400 dark:text-violet-600">senectus</span>erat pharetra
                </h1> */}
          <h1
            style={{
              paddingTop: "1rem",
              margin: "auto 0",
              fontWeight: "bold",
            }}
          >
            {data.selectCategory}{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  `${data.selectCategory}`,
                  `${data.price}`,
                  `${data.stockStatus}`,
                  `${data.description.slice(1, 40)}`,
                  `${data.name}`,
                  `${data.email}`,
                ]}
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
          <h1>{data.description}</h1>
          <div className="mt-5">
            <h1 className="text-2xl">Price: {data.price}</h1>
            <h1 className="text-2xl">customization: {data.customization}</h1>
            <div className="rating mt-5 flex justify-between">
              <h1>Rating :</h1>
              <h1>{data.rating}</h1>
            <div>
            <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#E5DDC5]"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#E5DDC5]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#E5DDC5]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#E5DDC5]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#E5DDC5]"
                
              />
            </div>
               
               <div>
                {data.stockStatus}
               </div>
            </div>
            <div>
              <p>Processing Time :{data.processing_time} Weeks</p>
            </div>
           
          </div>

          <div className="flex flex-col mt-5 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link to={"/"}>
              <button
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded bg-[#F1EEDC] dark:bg-[#F1EEDC] text-gray-900 dark:text-gray-50"
              >
                Go Home
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={data.photo}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default ViewDetails;
