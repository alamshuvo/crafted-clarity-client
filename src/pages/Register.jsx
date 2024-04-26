import { Link } from "react-router-dom";


const Register = () => {
   
    const handleRegister=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const photo=form.photo.value;
        const password=form.password.value;
    }






    return (
        <div className="flex flex-col items-center min-h-screen justify-center text-center   dark:bg-gray-50 text-gray-100 dark:text-[#E5DDC5]">
            <h1 className="text-center text-2xl text-[#B3C8CF] font-bold">Register Now</h1>
        <form noValidate="" onSubmit={handleRegister}  className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg text-gray-100 bg-[#B3C8CF] dark:text-[#E5DDC5]">
            {/* Name */}
            <label htmlFor="username" className="self-start text-xs font-semibold">Username</label>
            <input id="username" type="text" name="name" className="flex items-center h-12 px-4 mt-2 rounded text-[#E5DDC5] dark:text-gray-50 focus:outline-none focus:ring-2 focus:border-violet-400 focus:dark:border-violet-600 focus:ring-violet-400 focus:dark:ring-violet-600" />
            {/* email */}
            <label htmlFor="username" className="self-start text-xs font-semibold">Email</label>
            <input id="useremail" name="email" type="email"  className="flex items-center h-12 px-4 mt-2 rounded text-[#E5DDC5] dark:text-gray-50 focus:outline-none focus:ring-2 focus:border-violet-400 focus:dark:border-violet-600 focus:ring-violet-400 focus:dark:ring-violet-600" />

            {/* photo URl */}
            <label htmlFor="username" className="self-start text-xs font-semibold">Photo URL</label>
            <input id="userPhoto" name="photo" type="text"  className="flex items-center h-12 px-4 mt-2 rounded text-[#E5DDC5] dark:text-gray-50 focus:outline-none focus:ring-2 focus:border-violet-400 focus:dark:border-violet-600 focus:ring-violet-400 focus:dark:ring-violet-600" />
            {/* password */}
            <label htmlFor="username" className="self-start text-xs font-semibold">Password</label>
            <input id="userPassword" name="password" type="text"  className="flex items-center h-12 px-4 mt-2 rounded text-[#E5DDC5] dark:text-gray-50 focus:outline-none focus:ring-2 focus:border-violet-400 focus:dark:border-violet-600 focus:ring-violet-400 focus:dark:ring-violet-600" />



            <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded text-gray-900 dark:text-gray-50 bg-[#E5DDC5] hover:bg-[#B3C8CF] dark:bg-violet-600">Register</button>
            <div className="flex justify-center mt-6 space-x-2 text-xs">
              
                <span className="text-gray-100 text-xl dark:text-[#E5DDC5]">Already Have an account ?</span>
                <Link to={"/login"}>
                <button rel="noopener noreferrer"  className="text-[#E5DDC5] text-xl dark:text-[#E5DDC5]">Login</button>
                </Link>
            </div>
        </form>
    </div>
    );
};

export default Register;