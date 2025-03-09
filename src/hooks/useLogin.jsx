import toast from "react-hot-toast";
import { api } from "../Api/index";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/index";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {setToken} = useContext(AuthContext);

  const login = async (credentials) => {
    setIsLoading(true);
    try {
      const response = await api.post("/users/login", credentials);
      if (response.status === 200) {
        const userData = response?.data?.data;
        localStorage.setItem('authToken', userData?.token)
        setToken(userData?.token);
        toast.success(response?.data?.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
};

export default useLogin;
