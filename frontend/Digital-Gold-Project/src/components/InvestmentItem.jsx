import React, { useState } from "react";

export default function InvestmentItem({ inv, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(inv.name);
  const [amount, setAmount] = useState(inv.amount);

  function saveUpdate() {
    onUpdate(inv.id, { name, amount: Number(amount) });
    setIsEditing(false);
  }

  return (
    <li className="p-4 border rounded shadow-md bg-white flex flex-col space-y-2 hover:shadow-lg transition">
      {isEditing ? (
        <>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            onClick={saveUpdate}
            className="bg-green-500 hover:bg-green-600 text-white px-2 rounded mt-2 transition"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="px-2 mt-2"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <div className="font-semibold text-lg text-gray-800">{inv.name}</div>
          <div className="text-gray-600">Amount: ₹{inv.amount}</div>
          <div className="space-x-2 mt-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 rounded transition"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(inv.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-2 rounded transition"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}
