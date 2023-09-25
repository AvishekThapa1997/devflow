import { useCallback } from 'react';

function useLocalStorage() {
  const addItemToLocalStorage = useCallback((key: string, value: string) => {
    localStorage.setItem(key, value);
  }, []);
  const removeItemFromLocalStorage = useCallback((key: string) => {
    localStorage.removeItem(key);
  }, []);
  const getItemFromLocalStorage = useCallback((key: string) => {
    return localStorage.getItem(key);
  }, []);
  return {
    addItemToLocalStorage,
    removeItemFromLocalStorage,
    getItemFromLocalStorage,
  };
}

export default useLocalStorage;
