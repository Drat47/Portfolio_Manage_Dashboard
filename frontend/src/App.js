import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
const [investments, setInvestments] = useState([]);
const [error, setError] = useState("");
const [form, setForm] = useState({ user_name: "", amount: "", gold_quantity: "" });
const [editId, setEditId] = useState(null);
const [success, setSuccess] = useState("");

// Fetch all investments from backend
const fetchInvestments = async () => {
try {
const res = await axios.get("http://127.0.0.1:5000/investments");
setInvestments(res.data);
setError("");
} catch (err) {
console.error("Failed to load investments:", err);
setError("Failed to load investments. Check if backend is running on port 5000.");
}
};

useEffect(() => {
fetchInvestments();
}, []);

// Handle form field changes
const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};
const handleDelete = async (id) => {
  try {
    await axios.delete(`http://127.0.0.1:5000/investments/${id}`);
    setSuccess("Investment deleted!");
    setError("");
    fetchInvestments();
  } catch (err) {
    setError("Failed to delete investment.");
    setSuccess("");
  }
};



// Handle form submit
const handleSubmit = async (e) => {
  e.preventDefault();
  // simple validation
  if (
    !form.user_name.trim() ||
    !form.amount ||
    form.amount <= 0 ||
    !form.gold_quantity ||
    form.gold_quantity <= 0
  ) {
    setError("Oops! it must be positive ");
    setSuccess("");
    return;
  }

  try {
    if (editId === null) {
      await axios.post("http://127.0.0.1:5000/investments", form);
      setSuccess("Investment added!");
    } else {
      await axios.put(`http://127.0.0.1:5000/investments/${editId}`, form);
      setSuccess("Investment updated!");
    }
    setForm({ user_name: "", amount: "", gold_quantity: "" });
    setEditId(null);
    setError("");
    fetchInvestments();
  } catch (err) {
    setError(editId ? "Failed to update investment." : "Failed to add investment.");
    setSuccess("");
  }
};


return (
<div>
<h1>Digital Gold Investments</h1>
{success && <p style={{ color: "green" }}>{success}</p>}
{error && <p style={{ color: "red" }}>{error}</p>}


  <form onSubmit={handleSubmit} style={{
  marginBottom: "20px", display: "flex", gap: "10px", alignItems: "center"
}}>

    <input
      name="user_name"
      placeholder="Name"
      value={form.user_name}
      onChange={handleChange}
      required
    />
    <input
      name="amount"
      placeholder="Amount (₹)"
      type="number"
      value={form.amount}
      onChange={handleChange}
      required
    />
    <input
      name="gold_quantity"
      placeholder="Quantity (g)"
      type="number"
      value={form.gold_quantity}
      onChange={handleChange}
      required
    />
    <button
  type="submit"
  style={{
    padding: "6px 12px",
    background: editId === null ? "#047857" : "#c2410c",
    color: "blue",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }}
>
  {editId === null ? "Add Investment" : "Update Investment"}
</button>

  </form>

  {error && <p style={{ color: "red" }}>{error}</p>}

  <ul style={{ padding: 0 }}>
  {investments.map((inv) => (
    <li
      key={inv.id}
      style={{
        listStyle: "none",
        background: "#f0fdf4",
        marginBottom: "8px",
        padding: "8px 12px",
        borderRadius: "4px"
      }}
    >
    {inv.user_name} - ₹{inv.amount} - {inv.gold_quantity}g
   <button
  onClick={() => handleDelete(inv.id)}
  style={{
    marginLeft: "10px",
    background: "#dc2626",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    padding: "4px 8px"
  }}
>
  Delete
</button>
<button
  onClick={() => {
    setForm({
      user_name: inv.user_name,
      amount: inv.amount,
      gold_quantity: inv.gold_quantity,
    });
    setEditId(inv.id);
  }}
  style={{
    marginLeft: "6px",
    background: "#0369a1",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    padding: "4px 8px"
  }}
>
  Edit
</button>

  </li>
))}

  </ul>
</div>
);
}

export default App;