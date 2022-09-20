export const getData = async <T>(url: string, headers: Object): Promise<T> => {
  const response = await fetch(url, headers);
  return await await response.json();
};
