import { useQuery } from "@tanstack/react-query";
import { fetchUserInfo } from "../userApi";

export const useUserQuery = (id: string = '') => {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => fetchUserInfo(id),
    enabled: !!id,
  });
};