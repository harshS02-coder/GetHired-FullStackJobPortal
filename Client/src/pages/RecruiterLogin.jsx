import { useState , useContext} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import {toast} from 'react-toastify'

const RecruiterLogin = () => {
  const navigate = useNavigate();
  const {backendUrl} = useContext(AppContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(backendUrl + '/api/company/login', formData);

      if (res.data.success) {
        // Save auth
        localStorage.setItem("companyToken", res.data.token);
        localStorage.setItem("company", JSON.stringify(res.data.company));

        // Render dashboard → addJobs
        navigate("/dashboard/addJobs", { replace: true });

        toast.success("Login successful!");

        setTimeout(() => {
        window.location.reload();
        }, 1200);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Recruiter Login
          </h2>
          <p className="text-gray-500 mt-2">
            Access your hiring dashboard
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="hr@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-200 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          <span className="text-blue-600 font-medium fontweight-bold">
            Reload the page after login
          </span>
        </p>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          New recruiter?{" "}
          <span className="text-blue-600 font-medium cursor-pointer hover:underline">
            Register your company
          </span>
        </p>
      </div>
    </div>
  );
};

export default RecruiterLogin;
