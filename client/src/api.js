
import axios from "axios";

const URL = "http://localhost:3000"

export async function getProducts() {
  const response = await axios.get(`${URL}/api/products`)

  if (response.status === 200) {
      return response.data
  } else {
      return

  }
}

export async function getProduct (id) {
  try {
    const response = await axios.get(`${URL}/api/products/${id}`)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};