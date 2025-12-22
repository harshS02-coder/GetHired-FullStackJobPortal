import axios from "axios";
//import { useState } from "react";
import {useContext, useState} from 'react'
import { AppContext } from "../context/AppContext";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resetLink, setResetLink] = useState("");

  const {backendUrl} = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const {data} = await axios.post(backendUrl + '/api/company/forgotpassword', {email});
        setMessage(data.message);

        if(data.resetLink){
            setResetLink(data.resetLink);
        }

    } catch (error) {
        setMessage("An error occurred. Please try again later.");
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-xl font-semibold text-center mb-4">
          Forgot Password
        </h2>

        <input
          type="email"
          placeholder="Enter company email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border px-4 py-2 rounded-md mb-4 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Send Reset Link
        </button>

        {message && (
          <p className="text-sm text-green-600 text-center mt-4">
            {message}
          </p>
        )}
        {resetLink && (
          <p className="text-blue-600 text-sm mt-2 break-all">
            Temporary Reset Link: <a href={resetLink} target="_blank" rel="noopener noreferrer">{resetLink}</a>
          </p>
       )}
      </form>
    </div>
  );
};

export default ForgotPassword;
