export function addToLocalStorage(key: string, value: {}) {
    return localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
