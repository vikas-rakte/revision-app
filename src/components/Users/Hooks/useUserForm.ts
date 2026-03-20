import { useForm } from "react-hook-form";
import { useEffect } from "react";
import type { User } from "../user.types";

export const useUserForm = (data: User | undefined) => {
  const form = useForm<User>();

  const { reset } = form;

  useEffect(() => {
    if (data) reset(data);
  }, [data, reset]);

  return form;
};