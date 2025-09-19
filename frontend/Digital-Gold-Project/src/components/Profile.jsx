import React from "react";

export default function Profile({ user }) {
  return (
    <div className="p-4 border rounded mb-6 shadow-md max-w-md mx-auto bg-white">
      <h2 className="text-xl font-semibold mb-2">User Profile</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}
