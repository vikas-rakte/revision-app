import { useParams } from "react-router-dom";
import { useUserQuery } from "../Hooks/useUserQuery";
import { useUserForm } from "../Hooks/useUserForm";
import { useUpdateUser } from "../Hooks/useUpdateUser";
import Loader from "../../Loader/Loader";
import "./EditUserDetails.css";
import React from "react";
import type { User } from "../user.types";

const EditUserDetails = () => {
  const { id = "" } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useUserQuery(id);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useUserForm(data);

  const mutation = useUpdateUser(id, setError);

  if (!id) return <p>Invalid user ID</p>;

  if (isLoading) return <Loader />;
  if (isError) return <p>{error.message}</p>;

  const onSubmit = async (data: User) => {
    await mutation.mutateAsync(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2 className="form-title">Edit User Details</h2>

      {errors.root && <p className="error-text">{errors.root.message}</p>}

      <div className="form-group">
        <label>Name</label>
        <input {...register("name", { required: "Name is required" })} />
        <p className="error-text">{errors.name?.message}</p>
      </div>

      <div className="form-group">
        <label>Username</label>
        <input
          {...register("username", { required: "Username is required" })}
        />
        <p className="error-text">{errors.username?.message}</p>
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email",
            },
          })}
        />
        <p className="error-text">{errors.email?.message}</p>
      </div>

      <fieldset className="fieldset">
        <legend>Address</legend>

        <div className="form-group">
          <label>Street</label>
          <input {...register("address.street")} />
        </div>

        <div className="form-group">
          <label>Suite</label>
          <input {...register("address.suite")} />
        </div>

        <div className="form-group">
          <label>City</label>
          <input {...register("address.city")} />
        </div>

        <div className="form-group">
          <label>Zipcode</label>
          <input {...register("address.zipcode")} />
        </div>
      </fieldset>

      <div className="form-group">
        <label>Phone</label>
        <input {...register("phone", { required: "Phone is required" })} />
        <p className="error-text">{errors.phone?.message}</p>
      </div>

      <fieldset className="fieldset">
        <legend>Company</legend>

        <div className="form-group">
          <label>Name</label>
          <input {...register("company.name")} />
        </div>
      </fieldset>

      <button type="submit" disabled={isSubmitting} className="submit-btn">
        {isSubmitting ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

export default React.memo(EditUserDetails);
