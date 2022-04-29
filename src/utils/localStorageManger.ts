const saveToLocalStorage = (str: string, data: any) => {
  try {
    localStorage.setItem(str, JSON.stringify(data));
  } catch (err) {
    console.log("Data cant be stored with name =>", str, err);
  }
};

const getFromLocalStorage = (str: string) => {
  try {
    const data = localStorage.getItem(str) || "";
    return JSON.parse(data);
  } catch (err) {
    return null;
  }
};

const clearLocalStorage = () => {
  try {
    localStorage.clear();
  } catch (err) {
    console.log("Local storage can't be cleared");
  }
};

export { saveToLocalStorage, getFromLocalStorage, clearLocalStorage };
