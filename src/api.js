
import axios from "axios";

const URL = "http://localhost:8080"

export async function getProducts() {
  const response = await axios.get(`${URL}/api/products`)

  if (response.status === 200) {
      return response.data
  } else {
      return

  }
}

export async function getProduct(id) {
  const response = await axios.get(`${URL}api/products/${id}`)
  
  if (response.status === 200) {
    return response.data
  } else {
      return
  }
}