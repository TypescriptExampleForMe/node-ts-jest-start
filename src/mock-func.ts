export const forEach = (items: any, cb: Function) => {
    for (let item of items) {
        cb(item);
    }
}
export const filter = (items: any, cb: Function) => {
    const out = [];
    for (let item of items) {
        if (cb(item)) {
            out.push(item);
        }
    }
    return out;
}
