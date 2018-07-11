import {error} from '../utils/logger';

const KEY_PRFIX = 'app-storage-';

let isLocalStorageAvailable = null;

const checkLocalStorageAvailability = () => {

    if (isLocalStorageAvailable === null) {
        try {
            localStorage.setItem(KEY_PRFIX + 'test', '1');
            localStorage.removeItem(KEY_PRFIX + 'test');
            
            isLocalStorageAvailable = true;
        } 
        catch (err) {
            error(err);
            isLocalStorageAvailable = false;
        } 
    }
    
    return isLocalStorageAvailable;
}

export const setItem = (key, value) => {
    if (checkLocalStorageAvailability()) {
        localStorage.setItem(KEY_PRFIX + key, JSON.stringify(value));
        
        return value;
    }

    return null;
}

export const getItem = (key) => {
    if (checkLocalStorageAvailability()) {
        return JSON.parse(localStorage.getItem(KEY_PRFIX + key));
    }

    return null;
}

export const removeItem = (key) => {
    if (checkLocalStorageAvailability()) {
        const value = getItem(KEY_PRFIX + key);
        localStorage.removeItem(KEY_PRFIX + key)
        
        return value;
    }

    return null;
}