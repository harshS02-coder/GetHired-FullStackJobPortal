import { createContext, useState, useEffect} from "react";
import axios from "../../node_modules/axios";
import { useUser, useAuth } from "@clerk/clerk-react";
import {toast} from 'react-toastify'

export const AppContext = createContext()

export const AppContextProvider = (props) =>{

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const {user} = useUser()
    const {getToken} = useAuth()

    const [searchFilter,setSearchFilter] = useState({
        title: '',
        location: ''
    })

    const [isSearched, setIsSearched] = useState(false)

    const [jobs, setJobs] = useState([])

    const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);

    const [companyToken, setCompanyToken] = useState(null)
    const [companyData, setCompanyData] = useState(null)

    const [userData, setUserData] = useState(null)
    const [userApplication, setUserApplication] = useState([])

    //function to fetch the jobs for assets
    const fetchJobs = async ()=>{

        try {
            const {data} = await axios.get(backendUrl+'/api/jobs')
            if(data.success){
                setJobs(data.jobs)
                console.log(data.jobs)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
        //setJobs(jobsData)
    }

    //function to fetch company data
    const fetchCompanyData = async () =>{
        try {
            
            const {data} = await axios.get(backendUrl+'/api/company/company', {headers: { Authorization: `Bearer ${companyToken}`}})

            if(data.success){
                setCompanyData(data.company)
                console.log(data)
            }else{
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    //fetching user data
    const fetchUserData = async ()=>{
        try {
            const token = await getToken();
            const {data} = await axios.get(backendUrl+'/api/user/user', {headers:{Authorization:`Bearer ${token}`}})

            if(data.success){
                setUserData(data.user)
                console.log(data.user)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    //fetching user's applied application data

    const fetchUserAppliedJobs = async () =>{
        try {
            
            const token = await getToken()
            const {data} = await axios.get(backendUrl+'/api/user/application', {headers:{Authorization:`Bearer ${token}`}})

            if(data.success){
                setUserApplication(data.applications)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        fetchJobs()

        const storedCompanyToken = localStorage.getItem('companyToken')

        if(storedCompanyToken){
            setCompanyToken(storedCompanyToken)
        } 
    }, [])

    useEffect(()=>{
        if(companyToken){
            fetchCompanyData()
        }
    },[companyToken])


    useEffect(()=>{
        if(user){
            fetchUserData();
            fetchUserAppliedJobs();
        }
    },[user])

    const value = {
        setSearchFilter, searchFilter,
        isSearched, setIsSearched,
        jobs, setJobs, 
        showRecruiterLogin, setShowRecruiterLogin,
        companyToken, setCompanyToken,
        companyData, setCompanyData,
        backendUrl,
        userData, setUserData,
        userApplication, setUserApplication,
        fetchUserData, fetchUserAppliedJobs

    }

    return (<AppContext.Provider value = {value}>
    {props.children}
    </AppContext.Provider>)
}