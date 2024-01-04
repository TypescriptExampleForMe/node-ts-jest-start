import {filter, forEach} from "./mock-func";

test('The forEach function', () => {
    const mockCallback = jest.fn(x => 42 + x);
    forEach([44, '22', 66], mockCallback);
    // The mock function is called 3 times
    expect(mockCallback.mock.calls.length).toBe(3);
    // The first argument of the first call to the function was 44
    expect(mockCallback.mock.calls[0][0]).toBe(44);
    // The first argument of the second call to the function was '22'
    expect(mockCallback.mock.calls[1][0]).toBe('22');
    // The return value of the first call to the function was 86
    expect(mockCallback.mock.results[0].value).toBe(86);
    // The return value of the second call to the function was 4222
    expect(mockCallback.mock.results[1].value).toBe('4222');
})
test('inject test values during a test', () => {
    const funcMock = jest.fn();
    console.log('initial funcMock() -->', funcMock());
    // inject three values 3 calls to funcMock will return

    funcMock.mockReturnValueOnce(42)
        .mockReturnValueOnce('hello')
        .mockReturnValue(true);
    console.log('3 returned values:', funcMock(), funcMock(), funcMock());// --> 42, 'hello', true
    console.log('last value remains:', funcMock(), funcMock());// --> true, true
})

test('filter with an actual callback', () => {
    const ages = [80, 14, 55, 6, 45, 33, 11, 71];
    const over21 = (n: number) => n > 21;
    const result = filter(ages, over21);
    expect(result).toEqual([80, 55, 45, 33, 71]);
})
test('filter with mocking the returned values', () => {
    const filterTestFn = jest.fn();
    filterTestFn.mockReturnValueOnce(true)
        .mockReturnValueOnce(false)
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false)
        .mockReturnValueOnce(true)
    const ages = [80, 14, 55, 6, 45];
    const result = filter(ages, filterTestFn);
    expect(result).toEqual([80, 55, 45]);
})


