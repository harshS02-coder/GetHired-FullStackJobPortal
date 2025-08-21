import React, { useState, useRef, useEffect, useContext } from 'react';
import NavBar from '../components/NavBar';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { JobCategories, JobLocations } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddJobs = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('Bangalore');
    const [category, setCategory] = useState('');
    const [level, setLevel] = useState('Beginner level');
    const [salary, setSalary] = useState(0);

    const editorRef = useRef(null);
    const quillRef = useRef(null);

    const {backendUrl, companyToken} = useContext(AppContext)
 
    const onSubmitHandler = async (e)=>{
        e.preventDefault()
        try {
            
            const description =  quillRef.current.root.innerHTML

            const {data} = await axios.post(backendUrl+'/api/company/postJobs', {jobTitle, description, location, level, category, salary}, {headers:{token:companyToken}})

            if(data.success){
                toast.success(data.message)
                console.log("new job details", data)
                setJobTitle('')
                setSalary(0)
                quillRef.current.root.innerHTML = ""
            }else{
                toast.error(data.message) 
            }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        if (editorRef.current && !quillRef.current) {
          quillRef.current = new Quill(editorRef.current, {
            theme: 'snow',
            placeholder: 'Write the job description here...',
          });
        }
      }, []);

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Post a New Job</h2>

            <form onSubmit = {onSubmitHandler} className="bg-white shadow-lg rounded-2xl p-6 space-y-6">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Job Title</label>
                    <input
                        type="text"
                        placeholder="e.g. Frontend Developer"
                        onChange={e => setJobTitle(e.target.value)}
                        value={jobTitle}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Job Description</label>
                    <div
                        ref={editorRef}
                        className="bg-white h-40 border border-gray-300 rounded-xl shadow-sm"
                    ></div>
                </div>
                {/* dropdowns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Job Category</label>
                        <select
                            onChange={e => setCategory(e.target.value)}
                            value={category}
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            {JobCategories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Location</label>
                        <select
                            onChange={e => setLocation(e.target.value)}
                            value={location}
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            {JobLocations.map((location, index) => (
                                <option key={index} value={location}>{location}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Job Level</label>
                        <select
                            onChange={e => setLevel(e.target.value)}
                            value={level}
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            <option value='Beginner level'>Beginner Level</option>
                            <option value='Intermediate level'>Intermediate Level</option>
                            <option value='Senior level'>Senior Level</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Salary (INR)</label>
                    <input
                        type="number"
                        placeholder="e.g. 25000"
                        onChange={e => setSalary(e.target.value)}
                        value={salary}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                </div>

                <div className="text-right">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition duration-300"
                    >
                        Post Job
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddJobs;
