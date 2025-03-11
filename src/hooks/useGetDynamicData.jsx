import { useQuery } from '@tanstack/react-query';
import { api } from '../Api/index';

const useGetDynamicData = () => {
    const {data:dynamicPageData, isLoading:dynamicPageDataLoading} = useQuery({
        queryKey:['dynamicPageData'],
        queryFn: async () => {
          const res = await api.get('/dynamic-page');
          return res?.data?.data;
        },
        retry:1,
      });

    return {dynamicPageData, dynamicPageDataLoading}
};

export default useGetDynamicData;