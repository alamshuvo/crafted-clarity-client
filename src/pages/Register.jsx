import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../components/AuthProvider/AuthProvider";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {registerUser,error,updateProfileUser}=useContext(AuthContext)
    const navigate=useNavigate();
    const location=useLocation();
    const from =location?.state || "/";
   
    const handleRegister=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const photo=form.photo.value;
        const password=form.password.value;
   
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        if (password.length<6) {
            return Swal.fire({
                title: 'Error!',
                text: 'Your password must be atleast 6 char',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
          }
          if (!passwordPattern.test(password)) {
            return Swal.fire({
                title: 'Error!',
                text: 'password must have one lowercase and one uppercase letter atleast',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
          }
          registerUser(email,password)
          .then((res)=>{
            console.log(res.user);
            if (!error) {
                Swal.fire({
                    icon: "success",
                    title: "WOW",
                    text: "User created sucessfully!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
                  updateProfileUser(name,photo)
                  .then((res)=>{
                     console.log(res);
                  setTimeout(() => {
                   window.location.reload()
                     }, 1000);
                   navigate(from);
                  })
            }
            // from.reset()
        })
            
          .catch(error=>{
            // console.log(error)
            if (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
                
              }
          })



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
         <div className="relative w-full">
         
            <input id="userPassword" name="password" type={showPassword ? "text" : "password"} className="flex items-center h-12 px-4 mt-2 rounded text-[#E5DDC5] w-full dark:text-gray-50 focus:outline-none focus:ring-2 focus:border-violet-400 focus:dark:border-violet-600 focus:ring-violet-400 focus:dark:ring-violet-600" />
            <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <FaEyeSlash className="text-xl text-red-300  absolute top-[50%] right-[10%]" />
                ) : (
                  <FaEye className="text-xl text-red-300  absolute top-[50%] right-[10%]" />
                )}
              </span>
         </div>



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