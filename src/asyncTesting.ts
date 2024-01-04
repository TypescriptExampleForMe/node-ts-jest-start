export const sleep = (millis: number) => {
    return new Promise(resolve => setTimeout(resolve, millis));
}
export const fetchIceCream = (callback: Function) => {
    setTimeout(() => {
        callback('cookies & cream')
    }, 300);
}

export const fetchDance = (): Promise<string> => sleep(300).then(() => 'macarena');
export const fetchBrownies = (n: number) => {
    return sleep(300).then(() => {
        if (n > 5)
            throw new Error('Brownies were maxed out!');
        return 'Have some brownies';
    })
}

