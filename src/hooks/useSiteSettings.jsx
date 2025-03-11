import { useQuery } from "@tanstack/react-query";
import { api } from "../Api/index";

const useSiteSettings = () => {
  const { data: siteSettingData, isLoading: siteSettingLoading } = useQuery({
    queryKey: ["site-settings"],
    queryFn: async () => {
      const response = await api.get("/site-setting");
      return response?.data?.data;
    },
    retry:1,
  });

  return { siteSettingData, siteSettingLoading };
};

export default useSiteSettings;
