import axios from "axios";

const API_BASE = "http://127.0.0.1:5000"; // backend URL

export const fetchInvestments = async () => {
  try {
    const response = await axios.get(`${API_BASE}/investments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching investments:", error);
    throw error;
  }
};

export const createInvestment = async (data) => {
  try {
    const response = await axios.post(`${API_BASE}/investments`, data);
    return response.data;
  } catch (error) {
    console.error("Error creating investment:", error);
    throw error;
  }
};

export const updateInvestment = async (id, data) => {
  try {
    const response = await axios.put(`${API_BASE}/investments/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating investment:", error);
    throw error;
  }
};

export const deleteInvestment = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE}/investments/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting investment:", error);
    throw error;
  }
};
