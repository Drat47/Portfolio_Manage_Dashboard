import React, { useState } from "react";

export default function AddInvestment({ onAdd }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!name.trim()) {
      setError("Investment name is required");
      return;
    }
    if (!amount || Number(amount) <= 0) {
      setError("Amount should be a positive number");
      return;
    }
    onAdd({ name: name.trim(), amount: Number(amount) });
    setName("");
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded max-w-md mx-auto space-y-4 shadow">
      <h2 className="text-xl font-semibold">Add Investment</h2>
      {error && <div className="text-red-600">{error}</div>}
      <input
        type="text"
        placeholder="Investment Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 focus:ring focus:ring-blue-300 text-white px-4 py-2 rounded transition duration-300"
      >
        Add
      </button>
    </form>
  );
}
