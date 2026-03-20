import { useQuery } from "@tanstack/react-query";
import { getUser } from "../user.api";

export const useUserQuery = (id: string = '') => {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => getUser(id),
    enabled: !!id,
  });
};