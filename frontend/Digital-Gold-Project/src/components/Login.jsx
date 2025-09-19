import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const formBody = new URLSearchParams({ username: email, password: password });
    try {
      const res = await fetch("http://127.0.0.1:8000/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody.toString(),
      });
      if (!res.ok) {
        setError("Login failed! Check email and password.");
        return;
      }
      const data = await res.json();
      console.log("Login token received:", data.access_token);
      onLogin(data.access_token);
    } catch {
      setError("Network/server error!");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 border rounded shadow space-y-4">
      <h2 className="text-2xl font-semibold text-center">Login</h2>
      {error && <div className="text-red-500 text-center">{error}</div>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 focus:ring focus:ring-blue-300 text-white py-2 rounded transition duration-300"
      >
        Login
      </button>
    </form>
  );
}
