import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignIn() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // controlled inputs
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  // update state on input change
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function signIn(e) {
    e.preventDefault();
    setLoading(true);

    axios
      .post("http://localhost:3000/api/v1/user/signin", {
        username: form.username,
        password: form.password,
      })
      .then((response) => {
        const token = response.data.token; // ✅ properly declared
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
    <div className="flex items-center font-[Montserrat] justify-center min-h-screen bg-gray-900">
      <form
        onSubmit={signIn}
        className="bg-gray-800 shadow-lg rounded-2xl p-8 w-96 text-gray-100"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">
          Sign In
        </h2>

        <div className="mb-4">
          <label className="block text-sm mb-1">Username</label>
          <input
            name="username"
            type="text"
            value={form.username}
            onChange={handleChange}
            className="w-full border border-gray-600 rounded-lg px-3 py-2 bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1">Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-600 rounded-lg px-3 py-2 bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}

export default SignIn;
