import { useForm } from "react-hook-form";
import type { User } from "./UserType";
import { useEffect } from "react";

export const useUserForm = (data: User | undefined) => {
  const form = useForm<User>();

  const { reset } = form;

  useEffect(() => {
    if (data) reset(data);
  }, [data, reset]);

  return form;
};