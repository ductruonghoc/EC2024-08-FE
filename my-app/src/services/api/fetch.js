const fetching = async (url, props) => {
  try {
    const response = await fetch(url, props);

    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error; // Re-throw the error   for further handling
  }
}

export default fetching;