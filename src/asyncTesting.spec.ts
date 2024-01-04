import {fetchBrownies, fetchDance, fetchIceCream} from "./asyncTesting";

describe('Using callbacks', () => {
    test('fetchIcecream() defaults to cookies & cream', done => {
        function callback1(data: string) {
            try {
                expect(data).toBe('cookies & cream');
                done();
            } catch (error) {
                done(error);
            }
        }
        fetchIceCream(callback1);
    })
})

describe('Using Promises', () => {
    test('fetchDance() defaults to macarena', () => {
        // remember to use
        return fetchDance().then(data => {
            expect(data).toBe('macarena');
        });
    })
    test('fetchBrownies() fails if no number was specified', () => {
        expect.assertions(1);// Verifies that we assert at least x times
        return fetchBrownies(6).catch(err => {
            expect(err.message).toBe('Brownies were maxed out!');
        })
    })
})

describe('Using helpers - .resolves / .rejects', () => {
    test('fetchBrownies(3) is yielding the goods!', () => {
        return expect(fetchBrownies(3)).resolves.toBe('Have some brownies');
    })
    test('fetchBrownies(n) can get a max of 5 brownies', () => {
        return expect(fetchBrownies(6)).rejects.toThrow('Brownies were maxed out!');
    })
})

describe('Using async/await', () => {
    test('fetchDance() defaults to macarena', async () => {
        const data = await fetchDance();
        expect(data).toBe('macarena');
    });

    test('fetchBrownies() fails if no number was specified', async () => {
            expect.hasAssertions();// Verifies that we assert once
            try {
                await fetchBrownies(6)
            } catch (err) {
                expect((err as Error).message).toBe('Brownies were maxed out!');
            }
        }
    );
})

describe('Using async/await + helpers - .resolves / .rejects', () => {
    test('fetchBrownies(3) is yielding the goods!', async () => {
        await expect(fetchBrownies(3)).resolves.toBe('Have some brownies');
    })
    test('fetchBrownies(n) can get a max of 5 brownies', async () => {
        await expect(fetchBrownies(6)).rejects.toThrow('Brownies were maxed out!');
    })
})
