import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import { useAuth } from "../context/AuthContext";

export default function Login() {

  const navigate = useNavigate();

  const { login, loading } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const result = await login(
      formData.email,
      formData.password
    );

    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Left Section */}

      <div className="hidden lg:flex w-1/2 bg-blue-600 text-white flex-col justify-center items-center p-12">

        <h1 className="text-6xl font-bold">
          FitFocus
        </h1>

        <p className="mt-6 text-xl text-blue-100 text-center max-w-md">
          Track your fitness, daily tasks, habits,
          and productivity all in one place.
        </p>

      </div>

      {/* Right Section */}

      <div className="flex-1 flex justify-center items-center p-6">

        <Card>

          <h2 className="text-3xl font-bold mb-2">
            Welcome Back
          </h2>

          <p className="text-slate-500 mb-8">
            Login to continue
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />

            {error && (
              <p className="text-red-500 text-sm">
                {error}
              </p>
            )}

            <Button
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>

          </form>

          <p className="text-center mt-6 text-sm">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-blue-600 font-semibold"
            >
              Register
            </Link>

          </p>

        </Card>

      </div>

    </div>
  );
}