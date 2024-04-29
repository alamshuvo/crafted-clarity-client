import { CountdownCircleTimer } from "react-countdown-circle-timer";

const OurBigDeal = () => {
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too lale...</div>;
    }

    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

  return (
    <div className="md:w-[90%] w-full mx-auto text-center bg-[#E5DDC5] rounded-lg">
      <h1 className="md:text-3xl text-2xl font-bold mb-10 mt-10 ">
        Our Big Deal
      </h1>

      <div className="App flex justify-center mb-10">
        <div className="timer-wrapper">
          <CountdownCircleTimer
            isPlaying
            duration={100}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => ({ shouldRepeat: true, delay: 1 })}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
      </div>
      <div>
        <section className="  dark:bg-gray-100 text-gray-100 dark:text-gray-800 md:p-10 p-5">
          <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-[#BED7DC] dark:bg-gray-50">
              <span className="block mb-2 text-violet-400 dark:text-violet-600">
                Signiture Product
              </span>
              <h1 className="text-5xl font-extrabold text-gray-50 dark:text-gray-900">
                This Product is limited
              </h1>
              <p className="my-8">
                <span className="font-medium text-gray-50 dark:text-gray-900">
                  Jute
                </span>
                "Introducing our signature jute masterpiece, a symbol of
                sustainable luxury, meticulously crafted for eco-conscious
                elegance and timeless style."
              </p>
              <form noValidate="" action="" className="self-stretch space-y-3">
                <div>
                  <label htmlFor="name" className="text-sm sr-only">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-md focus:ring focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="text-sm sr-only">
                    Email address
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    placeholder="Email address"
                    className="w-full rounded-md focus:ring focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
                  />
                </div>
                <button
                  type="button"
                  className="w-full py-2 font-semibold rounded bg-[#E5DDC5] dark:bg-violet-600 text-gray-900 dark:text-gray-50 hover:bg-[#BED7DC]"
                >
                  Big Deal
                </button>
              </form>
            </div>
            <img
              src="https://i.ibb.co/DMSbVYW/2150440622.jpg"
              alt=""
              className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500 dark:bg-gray-500"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurBigDeal;
