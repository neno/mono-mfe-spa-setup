export const getListings = async (queryParams: string) => {
  try {
    const res = await fetch(`http://localhost:30000/listings?${queryParams}`);
    return res.json();
  } catch (error) {
    console.error(error);
  }
};