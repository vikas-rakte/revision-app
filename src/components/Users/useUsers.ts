import { useQuery } from "@tanstack/react-query";
import { fetchAllUsers } from "./userApi";

const useUsers = ()=>{
    const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchAllUsers,
    staleTime: 1000 * 60 * 1, // 1 minutes
  });

  return { users, isLoading, isError, error }
}

export default useUsers;