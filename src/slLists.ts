//export asyncron function med T, one promise
export const get = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  // error throw
  if (!response) {
    throw new Error("Failed ");
  }
  const data: T = await response.json();

  return data;
};
//------------------------------------
