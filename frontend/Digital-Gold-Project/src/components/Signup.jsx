import React, { useState } from "react";

export default function Signup({ onSignupSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const res = await fetch("http://127.0.0.1:8000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const msg = (await res.json()).detail || "Signup failed";
        setError(msg);
        return;
      }
      setSuccess("Signup successful! Now login.");
      setTimeout(() => onSignupSuccess && onSignupSuccess(), 1500);
    } catch {
      setError("Network/server error!");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 border rounded shadow space-y-4 mt-8">
      <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
      {error && <div className="text-red-500 text-center">{error}</div>}
      {success && <div className="text-green-600 text-center">{success}</div>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        required
      />
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 focus:ring focus:ring-green-300 text-white py-2 rounded transition duration-300"
      >
        Signup
      </button>
    </form>
  );
}
