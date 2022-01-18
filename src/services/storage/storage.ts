export const setStorage = ( key: string, value: string ) => {
    return localStorage.setItem(key, value);
}

export const getStorage = ( key: string ) => {
    const storage = localStorage.getItem(key);
    if (storage)
        return JSON.parse(storage);
    return {};
}