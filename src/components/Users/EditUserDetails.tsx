import type { User } from "./UserType";
import { fetchUserInfo, updateUser } from "./userApi";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import "./EditUserDetails.css";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const EditUserDetails = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<User>();

  const mutate = useMutation({
    mutationFn: (data: User) => {
      return updateUser(id, data);
    },
    onMutate: () => {},
    onError: () => {
      setError("root", {
        message: "Failed to save user",
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users", id],
    queryFn: () => fetchUserInfo(id!),
    enabled: !!id,
  });

  useEffect(() => {
    if (data) reset(data);
  }, [data, reset]);

  if (!id) return <p>Invalid user ID</p>;
  if (isLoading) return <Loader />;

  if (isError) {
    return <p>{(error as Error)?.message || "Failed to load user"}</p>;
  }

  const onSubmit = (formData: User) => {
    mutate.mutate(formData);
  };

  return (
    <form
      className="edit-user-form"
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: 500, margin: "0 auto" }}
    >
      <h2>Edit User Details</h2>

      {/* Global Error */}
      {errors.root && (
        <p style={{ fontSize: "12px", color: "red" }}>{errors.root.message}</p>
      )}

      <label>
        Name:
        <input {...register("name", { required: "Name is required" })} />
        <p style={{ fontSize: "12px", color: "red" }}>{errors.name?.message}</p>
      </label>

      <label>
        Username:
        <input
          {...register("username", { required: "Username is required" })}
        />
        <p style={{ fontSize: "12px", color: "red" }}>
          {errors.username?.message}
        </p>
      </label>

      <label>
        Email:
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email",
            },
          })}
        />
        <p style={{ fontSize: "12px", color: "red" }}>
          {errors.email?.message}
        </p>
      </label>

      <fieldset>
        <legend>Address</legend>

        <label>
          Street:
          <input {...register("address.street")} />
        </label>

        <label>
          Suite:
          <input {...register("address.suite")} />
        </label>

        <label>
          City:
          <input {...register("address.city")} />
        </label>

        <label>
          Zipcode:
          <input {...register("address.zipcode")} />
        </label>
      </fieldset>

      <label>
        Phone:
        <input {...register("phone", { required: "Phone is required" })} />
        <p style={{ fontSize: "12px", color: "red" }}>
          {errors.phone?.message}
        </p>
      </label>

      <fieldset>
        <legend>Company</legend>
        <label>
          Name:
          <input {...register("company.name")} />
        </label>
      </fieldset>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

export default EditUserDetails;
