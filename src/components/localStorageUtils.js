// localStorageUtils.js
export const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};


// localStorageUtils.js
export const getFromLocalStorageArray = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};

export const addToLocalStorageArray = (key, item) => {
    const dataArray = getFromLocalStorageArray(key);
    dataArray.push(item);
    saveToLocalStorage(key, dataArray);
}