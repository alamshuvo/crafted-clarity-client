import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    
    <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
        <Helmet>
            <title>Crafted-Clarity | Error Page</title>
        </Helmet>
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <img src={"https://i.ibb.co/6sZ8qBJ/3804918.jpg"} alt="" />

          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldnt find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
        <Link to={"/"}>
        <button
            rel="noopener noreferrer"
            className="px-8 py-3 btn font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Back to homepage
          </button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
