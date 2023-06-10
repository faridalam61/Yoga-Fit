import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

function SignUp() {
  const { createUser, setProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const onSubmit = (data) => {
    const profile = {
      displayName: data.name,
      photoURL: data.photoUrl,
      phoneNumber: data.phone,
      gender: data.gender,
      address: data.address,
    };
    createUser(data.email, data.password)
      .then(() => {
        setProfile(profile).then(() => {
          const newUser = {
            name: data.name,
            photo: data.photoUrl,
            email: data.email,
            role: "Student",
          };
          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              if (result.insertedId) {
                alert("Success");
              }
            });
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="w-96 mt-10 mx-auto shadow-md p-6">
      <h2 className="my-4 text-2xl text-bold">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered my-3 w-full"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-red-500 my-2">Name is required</span>
        )}
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
          {...register("password", {
            required: true,
            minLength: 6,
            pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
          })}
        />
        {errors.password?.type == "required" && (
          <span className="text-red-500 my-2">Password is required</span>
        )}
        {errors.password?.type == "minLength" && (
          <span className="text-red-500 my-2">
            Password should be longer than 6 charecters
          </span>
        )}
        {errors.password?.type == "pattern" && (
          <span className="text-red-500 my-2">
            Password must have special charecter and Capital letter
          </span>
        )}
        <input
          type="password"
          placeholder="Confirm Password"
          className="input input-bordered my-3 w-full"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />

        {errors.confirmPassword && (
          <span className="text-red-500 my-2">
            {errors.confirmPassword.message}
          </span>
        )}
        <input
          type="text"
          placeholder="Photo URL"
          className="input input-bordered my-3 w-full"
          {...register("photoUrl", { required: true })}
        />
        {errors.photoUrl && (
          <span className="text-red-500 my-2">PhotoUrl is required</span>
        )}
        <select
          id="gender"
          {...register("gender")}
          className="w-full border py-3 rounded-md"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          placeholder="Phone Number"
          className="input input-bordered my-3 w-full"
          {...register("phone")}
        />
        <input
          type="text"
          placeholder="Address"
          className="input input-bordered my-3 w-full"
          {...register("address")}
        />

        <input
          type="submit"
          value="Sign Up"
          className="bg-black block w-full cursor-pointer mt-3 rounded-md text-white py-3 px-6"
        />
      </form>
      <p className="text-center my-4">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default SignUp;
