const enabled = true;

export const log = (...args) => {
    return enabled && console.log(...args);
}

export const error = (...args) => {
    return enabled && console.error(...args);
}

export const warn = (...args) => {
    return enabled && console.warn(...args);
}