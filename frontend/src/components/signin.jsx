import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BottomWarning } from "./warning";

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
      .post("http://localhost:3000/api/v1/user/signin", form)
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
    <div className="flex items-center justify-center  text-white min-h-screen bg-gray-950 px-4 font-[Montserrat]">
      <form
        onSubmit={signIn}
        className="bg-gray-900 shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-4xl font-bold mb-6  font-[Merriweather] text-center text-blue-400">
          Sign In
        </h2>

        <div className="mb-4">
          <label htmlFor="username" className="block  text-sm mb-1">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
            className="w-full border border-gray-700 rounded-lg px-3 py-2 bg-gray-800  placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            className="w-full border border-gray-700 rounded-lg px-3 py-2 bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <BottomWarning
          label={"Don't have an account?"}
          buttonText={"Sign up"}
          to={"/signup"}
        />
      </form>
    </div>
  );
}

export default SignIn;
