import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()  
   
        let newError = {};
        if(!name){
            newError.name = "Name is missing";
        }
        if(!password){
            newError.password = "Password is missing";
        }
        if(!email){
            newError.email = "email is missing";
        }
        setErrors(newError)

        if(Object.keys(newError).length === 0){
            console.log({name, email, password});
            navigate("/login");
        }
   
  }
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form 
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-200">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-6 text-sm">
          Join us by filling in the information below
        </p>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300"
        >
          Register
        </button>

        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <NavLink to='/login' className="text-green-600 font-medium cursor-pointer hover:underline">
            Login
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
