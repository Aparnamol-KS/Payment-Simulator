import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignIn() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function signIn(e) {
    e.preventDefault();
    setLoading(true);

    axios
      .post("http://localhost:3000/api/v1/user/signin", {
        username: document.getElementById("username").value,
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
        onSubmit={signIn}
        className="bg-white shadow-md rounded-2xl p-8 w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign In
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
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}

export default SignIn;
