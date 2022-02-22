export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=1ZVjxsy13yUP9e5IIp1MMImyJmhsT0Jc`;
  const response = await fetch(url);
  const { data } = await response.json();

  return data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));
};
