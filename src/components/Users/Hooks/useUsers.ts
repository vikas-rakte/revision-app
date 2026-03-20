import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../user.api";

const useUsers = ()=>{
    const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    staleTime: 1000 * 60 , // 1 minutes
   // refetchInterval: 5000
  });

  return { users, isLoading, isError, error }
}

export default useUsers;