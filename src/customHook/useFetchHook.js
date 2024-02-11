import { useState, useEffect } from 'react';
const FETCH_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';
const useFetchHook = () => {
  const [data, setData] = useState({});
  const getUserData = async () => {
    try {
      const response = await fetch(FETCH_URL);
      const res = await response.json();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return [data, setData];
};
export default useFetchHook;
