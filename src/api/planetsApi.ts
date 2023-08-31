import axios from "axios";

const API_BASE_URL = "https://demo-api-production-51ec.up.railway.app";

export async function fetchPlanets() {
  const response = await axios.get(`${API_BASE_URL}/planets`);
  return response.data;
}
