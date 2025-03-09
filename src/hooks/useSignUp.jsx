import toast from "react-hot-toast";
import { api } from "../Api/index";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const useSignUp = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
  const signUp = async (credentials) => {
    setIsLoading(true)
    try{
        const response = await api.post('/users/register', credentials);
        if(response.status === 201){
            toast.success(response.data.message);
            setTimeout(() => {
                navigate('/login')
            }, 500);
        }
    }catch(error){
        toast.error(error.response.data.message);
    }finally{
        setIsLoading(false)
    }
  }


  return {signUp, isLoading}
};

export default useSignUp;