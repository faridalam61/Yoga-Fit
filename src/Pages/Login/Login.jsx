import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash,FaEye, FaGoogle  } from 'react-icons/fa';
import { AuthContext } from "../../AuthProvider/AuthProvider";


function Login() {
  const {loginUser,loginWithGoogle} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginUser(data.email,data.password)
    .then(()=>{
      navigate('/')
    })
    .catch(error =>{
      alert(error.message)
    })
  };
  // login with google
  const handleGoogleLogin = ()=>{
    loginWithGoogle()
    .then(()=>{
      navigate('/')
    })
  }
  return (
    <div className="w-96 mt-10 mx-auto shadow-md p-6">
      <h2 className="my-4 text-2xl text-bold">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered my-3 w-full"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500 my-2">Email is required</span>
        )}
        <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          className="input input-bordered my-3 w-full"
          {...register("password", { required: true })}
        />
        <button className="absolute top-[28px] right-[15px] z-10" type="button" onClick={togglePasswordVisibility}>
          {showPassword ? <FaEyeSlash/> : <FaEye />}
        </button>
        </div>
        {errors.password && (
          <span className="text-red-500 my-2">Password is required</span>
        )}

        <input
          type="submit"
          value="Login"
          className="bg-black block w-full cursor-pointer mt-3 rounded-md text-white py-3 px-6"
        />
      </form>
      <p className="text-center my-4">
        Don't have an account? <Link to="/sign-up">Sign Up here</Link>
      </p>
      <p className="text-center my-4 font-xl">-OR-</p>
      <button onClick={handleGoogleLogin} className="w-full cursor-pointer block bg-yellow-500 py-2 flex items-center gap-2 justify-center rounded-md">
        <FaGoogle/> Login with Google
      </button>
    </div>
  );
}

export default Login;
