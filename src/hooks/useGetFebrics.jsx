import { api } from "../Api/index";
import { useEffect, useState } from "react";

const useGetFebrics = ({ fabricType }) => {

  const [loading, setLoading] = useState(false);
  const [fabricData, setFabricData] = useState(null)

  useEffect(() => {
      const fetchUser = async () => {
        setLoading(true);
        try{
          const response = await api.get(`fabric-and-patterns?type=${fabricType}`);
          if(response.status === 200){
            setFabricData(response?.data?.data);
          }
        }catch(error){
          console.log(error);
        }finally{
          setLoading(false);
        }
      }
      fetchUser();

  }, [fabricType]);

  return {fabricData, loading}
};

export default useGetFebrics;
