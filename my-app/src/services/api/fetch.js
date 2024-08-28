const fetching = async (url, method = "GET") => {
  try {
    const response = await fetch(url, {
      method: method,
      mode: 'cors'
    }
    );

    if (!response.ok) {
      throw new Error(`Network unstable: ${response.status})`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);

    throw error; // Re-throw the error   for further handling
  }
}

export default fetching;