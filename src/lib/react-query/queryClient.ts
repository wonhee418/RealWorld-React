import { isAxiosError } from "axios";
import { QueryClient } from "react-query";
// import { toast } from "react-toastify/dist/core";

// const errorNotify = (value: string) => toast.error(value, { autoClose: 2000 });

const queryErrorHandler = (error: unknown) => {
  if (isAxiosError(error)) {
    if (error.response!.status >= 400) console.log(error.response!.data.errors);
  }
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      staleTime: 0,
      cacheTime: 0,
      refetchOnMount: false, // 마운트시 리페치 여부
      refetchOnReconnect: false, // 재연결시 리페치 여부
      refetchOnWindowFocus: false, // 윈도우포커스시 리페치 여부, (브라우저 클릭)
    },
    mutations: {
      onError: queryErrorHandler,
    },
  },
});
