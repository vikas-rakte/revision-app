import React from "react";
import type { User } from "./UserType";

function UserCard({ user }: { user: User }) {
  return (
    <div className="card">
      <div className="header">
        <h2>{user.name}</h2>
        <p className="username">@{user.username}</p>
      </div>

      <div className="section">
        <h3>Contact</h3>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
      </div>

      <div className="section">
        <h3>Address</h3>
        <p>
          {user.address.street}, {user.address.suite}
        </p>
        <p>
          {user.address.city} - {user.address.zipcode}
        </p>
        <p>
          <strong>Geo:</strong> Lat: {user.address.geo.lat}, Lng:{" "}
          {user.address.geo.lng}
        </p>
      </div>

      <div className="section">
        <h3>Company</h3>
        <p>
          <strong>Name:</strong> {user.company.name}
        </p>
        <p>
          <strong>Catchphrase:</strong> {user.company.catchPhrase}
        </p>
        <p>
          <strong>Business:</strong> {user.company.bs}
        </p>
      </div>
    </div>
  );
}

export default React.memo(UserCard);
