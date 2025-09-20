import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BottomWarning } from "./warning";

function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Store input values in state
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  // Handle input change
  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  // Submit handler
  function addUser(e) {
    e.preventDefault();
    setLoading(true);

    axios
      .post("http://localhost:3000/api/v1/user/signup", formData)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", `Bearer ${token}`);
        navigate("/dashboard");
      })
      .catch(() => {
        alert("Some error occurred!!");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="flex items-center font-[Montserrat]  text-white justify-center min-h-screen bg-gray-950 px-4">
      <form
        onSubmit={addUser}
        className="bg-gray-900 shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-4xl font-bold mb-6 text-center font-[Merriweather] text-blue-400">
          Create an Account
        </h2>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm mb-1">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-gray-700 rounded-lg px-3 py-2 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-400"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="firstName" className="block  text-sm mb-1">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-gray-700 rounded-lg px-3 py-2 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-400"
            placeholder="Enter your first name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm mb-1">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border border-gray-700 rounded-lg px-3 py-2 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-400"
            placeholder="Enter your last name"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block  text-sm mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-700 rounded-lg px-3 py-2 bg-gray-800  placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-400"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        <BottomWarning
          label={"Already have an account?"}
          buttonText={"Sign in"}
          to={"/signin"}
        />
      </form>
    </div>
  );
}

export default SignUp;
