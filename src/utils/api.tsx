import { User } from "./types";

export async function getProducts() {
  try {
    const response = await fetch("/api/public/products", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error fetching products: ", error);
    return [];
  }
}

export async function getToken(user: User) {
  try {
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ ...user }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error fetching UserInfo: ", error);
    return null;
  }
}
