export const setLocalStorage = (key, value) => {
  const encryptedValue = window.btoa(value);
  localStorage.setItem(key, encryptedValue);
};

export const getLocalStorage = (key) => {
  const encryptedName = localStorage.getItem(key);
  if (encryptedName == null) {
    console.warn("null value in storage, no value with key");
    return " ";
  }
  return window.atob(encryptedName);
};