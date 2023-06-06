import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
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
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered my-3 w-full"
          {...register("password", { required: true })}
        />

        {errors.password && (
          <span className="text-red-500 my-2">Password is required</span>
        )}

        <input
          type="submit"
          value="Login"
          className="bg-black block w-full mt-3 rounded-md text-white py-3 px-6"
        />
      </form>
      <p className="text-center my-4">
        Don't have an account? <Link to="/sign-up">Sign Up here</Link>
      </p>
      <p className="text-center my-4 font-xl">-OR-</p>
      <button className="w-full block bg-yellow-500 py-2 rounded-md">
        Login with Google
      </button>
    </div>
  );
}

export default Login;
