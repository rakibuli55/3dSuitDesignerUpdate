import { useEffect, useState } from "react";
import { AuthContext } from "../context/index";
import useGetUser from "../hooks/useGetUser";
import Preloader from "../components/Preloader";
import useGetDynamicData from "../hooks/useGetDynamicData";
import useSiteSettings from "../hooks/useSiteSettings";
import useSocialMedia from "../hooks/useSocialMedia";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);
  const [user, setUser] = useState(null)
  const {userData, userLoading} = useGetUser(token);
  const {dynamicPageData, dynamicPageDataLoading} = useGetDynamicData();
  const {siteSettingData, siteSettingLoading} = useSiteSettings();
  const {socialMediaData, socialMediaLoading} = useSocialMedia();

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
    <AuthContext.Provider value={{ token, setToken, user, setUser, dynamicPageData, siteSettingData, socialMediaData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
