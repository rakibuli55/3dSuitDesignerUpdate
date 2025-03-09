import { useEffect, useState } from "react";
import { AuthContext } from "../context/index";
import useGetUser from "../hooks/useGetUser";
import Preloader from "../components/Preloader";
import useGetDynamicData from "../hooks/useGetDynamicData";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);
  const [user, setUser] = useState(null)
  const {userData, userLoading} = useGetUser(token);
  const {dynamicPageData, dynamicPageDataLoading} = useGetDynamicData();

  useEffect(() => {
    if(userData){
      setUser(userData)
    }else{
      setUser(null)
    }
  }, [userData]);
  if(userLoading){
    return <Preloader />
  }

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser, dynamicPageData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
