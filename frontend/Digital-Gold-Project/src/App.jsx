import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AddInvestment from "./components/AddInvestment";
import InvestmentItem from "./components/InvestmentItem";
import InvestmentChart from "./components/InvestmentChart";
import Profile from "./components/Profile";
import { fetchInvestments, addInvestment, deleteInvestment, updateInvestment } from "./api";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [investments, setInvestments] = useState([]);
  const [error, setError] = useState(null);
  const [showSignup, setShowSignup] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  

  useEffect(() => {
    if (!token) return;
    fetchInvestments(token)
      .then(setInvestments)
      .catch((err) => setError(err.message));
  }, [token]);

  function handleLogin(newToken) {
  console.log("Setting token in app state:", newToken);  // Nayi line add karo
  setToken(newToken);
  localStorage.setItem("token", newToken);
  setError(null);
}


  function handleLogout() {
    setToken("");
    localStorage.removeItem("token");
    setInvestments([]);
  }

  async function handleAdd(newInv) {
    try {
      const added = await addInvestment(newInv, token);
      setInvestments([...investments, added]);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteInvestment(id, token);
      setInvestments(investments.filter((i) => i.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleUpdate(id, updatedInv) {
    try {
      const updated = await updateInvestment(id, updatedInv, token);
      setInvestments(investments.map((i) => (i.id === id ? updated : i)));
    } catch (err) {
      setError(err.message);
    }
  }

  const filteredInvestments = investments.filter((inv) =>
    inv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentUser = { username: token, email: "demo@example.com" }; // Replace with real user data if available

  if (!token) {
    if (showSignup) {
      return <Signup onSignupSuccess={() => setShowSignup(false)} />;
    }
    return (
      <div className="max-w-md mx-auto mt-16 p-4">
        <Login onLogin={handleLogin} />
        <button
          onClick={() => setShowSignup(true)}
          className="mt-4 block mx-auto bg-green-600 hover:bg-green-700 focus:ring focus:ring-green-300 text-white px-4 py-2 rounded transition duration-300"
        >
          New user? Sign Up
        </button>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 max-w-4xl mx-auto p-4 mt-10 rounded border border-red-300 bg-red-100 shadow">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Profile user={currentUser} />
      <button
        onClick={handleLogout}
        className="mb-4 bg-red-600 hover:bg-red-700 focus:ring focus:ring-red-300 text-white px-4 py-2 rounded transition duration-300"
      >
        Logout
      </button>
      <AddInvestment onAdd={handleAdd} />
      <input
        type="text"
        placeholder="Search Investments"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full max-w-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <h1 className="text-3xl font-bold mb-6">My Investments</h1>
      <ul className="space-y-4">
        {filteredInvestments.map((inv) => (
          <InvestmentItem
            key={inv.id}
            inv={inv}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Investment Distribution</h2>
        <InvestmentChart data={filteredInvestments} />
      </div>
    </div>
  );
}

export default App;
