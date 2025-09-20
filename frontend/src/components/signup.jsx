import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function addUser(e) {
    e.preventDefault(); // prevent page reload
    setLoading(true);

    axios
      .post("http://localhost:3000/api/v1/user/signup", {
        username: document.getElementById("username").value,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        password: document.getElementById("password").value,
      })
      .then(() => {
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={addUser}
        className="bg-white shadow-md rounded-2xl p-8 w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign Up
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-1">Username</label>
          <input
            id="username"
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-1">First Name</label>
          <input
            id="firstName"
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your first name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-1">Last Name</label>
          <input
            id="lastName"
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your last name"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm mb-1">Password</label>
          <input
            id="password"
            type="password"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
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
      </form>
    </div>
  );
}

export default SignUp;
