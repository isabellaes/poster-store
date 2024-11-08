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
