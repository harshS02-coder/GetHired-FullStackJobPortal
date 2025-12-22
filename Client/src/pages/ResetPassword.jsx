import React, {useState, useContext} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';


const ResetPassword = () =>{
    const {token} = useParams();
    const navigate = useNavigate();

    const {backendUrl, setShowRecruiterLogin} = useContext(AppContext);

    const [newPassword, setNewPassword] = useState("");
    const [confirmNewpassword, setConfirmNewpassword] = useState("");

    const handleSubmit =  async (e) => {
        e.preventDefault();

        if(newPassword !== confirmNewpassword){
            return toast.error("Passwords do not match")
        }
        try{
            const {data} = await axios.post(backendUrl + "/api/company/resetpassword", {token , newPassword });

            if(data.success){
                toast.success("Password reset successful! Please log in with your new password.");
                navigate("/");
                setShowRecruiterLogin(true);
            }else{
                toast.error(data.message);
            }
        }catch(error){
            toast.error("An error occurred. Please try again later.", error);
        }
    };

    return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-semibold mb-4">Reset Password</h2>

        <input
          type="password"
          placeholder="New Password"
          className="w-full mb-3 p-2 border rounded"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-4 p-2 border rounded"
          value={confirmNewpassword}
          onChange={(e) => setConfirmNewpassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Reset Password
        </button>
      </form>
    </div>
    );
};
    


export default ResetPassword