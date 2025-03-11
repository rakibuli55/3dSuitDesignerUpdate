import { useQuery } from "@tanstack/react-query";
import { api } from "../Api/index";

const useSocialMedia = () => {
  const { data: socialMediaData, isLoading: socialMediaLoading } = useQuery({
    queryKey: ["socialData"],
    queryFn: async () => {
      const response = await api.get("/social-media");
      return response?.data?.data;
    },
    retry:1,
  });

  return { socialMediaData, socialMediaLoading };
};

export default useSocialMedia;
