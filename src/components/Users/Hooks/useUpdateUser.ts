import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../userApi";
import type { UseFormSetError } from "react-hook-form";
import type { User } from "../user.types";

export const useUpdateUser = (
  id: string,
  setError: UseFormSetError<User>
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: User) => {
      if (!id) throw new Error("Invalid user ID");
      return updateUser(id, data);
    },

    onError: () => {
      setError("root", {
        message: "Failed to save user",
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};