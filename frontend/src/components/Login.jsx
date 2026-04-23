import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    let newErrors = {}

    if (!email) {
      newErrors.email = "Email is required"
    }

    if (!password) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) return

    console.log({ email, password })

    navigate("/")
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4">
      
      <form onSubmit={handleSubmit}
      className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-200">
        
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-6 text-sm">
          Login to continue to your account
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
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
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-500 mt-5">
          Don’t have an account?{" "}
          <NavLink to='/register' className="text-blue-600 font-medium cursor-pointer hover:underline">
            Register
          </NavLink>
        </p>
      </form>
    </div>
  )
}

export default Login