test("toBe", () => {
    expect(22).toBe(22);
    expect(10).toBeGreaterThan(8);
    expect(10).toBeGreaterThanOrEqual(10);
    expect(10).toBeLessThan(11);
    expect(10).toBeLessThanOrEqual(11);
})
test("Anything", () => {
    expect({val: 123}).toEqual({val: expect.anything()});
    expect({val: 1}).toEqual({val: expect.any(Number)});
})

test("Arrays", () => {
    expect(["A", "B", "C", "D"]).toEqual(expect.arrayContaining(["B"]))
    expect([{val: 1}, {val: 2}]).toEqual(expect.arrayContaining([{val: 2}]))
    expect([
        {val: 1, nested: {val: 10}},
        {val: 2, nested: {x: 8, y: 6}},
        {val: 2, nested: {x: 8, y: 6, z: {length: 22}}},
    ]).toEqual(expect.arrayContaining([
        {val: 2, nested: {y: 6, x: 8, z: {length: 22}}},
    ]))
    expect(["A", "B", "C", "D"]).toEqual(expect.not.arrayContaining(["E"]));
    const expected = [
        expect.stringMatching(/^Alic/),
        expect.stringMatching(/^[BR]ob/),
    ];
    expect(['Alicia', 'Roberto', 'Evelina']).toEqual(expect.arrayContaining(expected));
})
test("Objects", () => {
    expect({a: "a", b: "b"}).toEqual(expect.objectContaining({a: expect.any(String)}));
    expect({a: "a", b: "b"}).toEqual(expect.not.objectContaining({c: expect.any(String)}));
})


test("stringContaining", () => {
    expect("ScaffoldHub").toEqual(expect.stringContaining("Scaffold"));
    expect("ScaffoldHub").toEqual(expect.not.stringContaining("Google"));
    expect('12:59').toMatch(/^\d{1,2}:\d{2}$/);
})

test("toHaveBeenCalled", () => {
    const mockFn = jest.fn();
    mockFn(5);
    mockFn("a");
    mockFn(7);
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(3);
    expect(mockFn).toHaveBeenCalledWith(5);
    expect(mockFn).toHaveBeenLastCalledWith(7);
    expect(mockFn).toHaveBeenNthCalledWith(2, "a");
})
test("toHaveReturned", () => {
    const mockFn = jest.fn(ok => {
        if (ok) {
            return "A";
        }
        throw new Error("error");
    });
    try {
        mockFn(true);
        mockFn(false);
    } catch (error) {
        // ignore
    }
    expect(mockFn).toHaveReturned();
    expect(mockFn).toHaveReturnedTimes(1);
    expect(mockFn).toHaveReturnedWith("A");
})

test("toHaveProperty", () => {
    const houseForSale = {
        bath: true,
        bedrooms: 4,
        kitchen: {
            amenities: ["oven", "stove", "washer"],
            area: 20,
            wallColor: "white",
            "nice.oven": true,
        },
        "ceiling.height": 2
    }
    expect(houseForSale).toHaveProperty("bath");
    expect(houseForSale).toHaveProperty("bedrooms", 4);
    expect(houseForSale).not.toHaveProperty("pool");
    expect(houseForSale).toHaveProperty("kitchen.area", 20);
    expect(houseForSale).toHaveProperty(["kitchen", "area"], 20);
    expect(houseForSale).toHaveProperty("kitchen.amenities", ["oven", "stove", "washer"]);
    expect(houseForSale).toHaveProperty(["kitchen", "amenities"], ["oven", "stove", "washer"]);
    expect(houseForSale).toHaveProperty(["kitchen", "amenities", 0], "oven");
    expect(houseForSale).not.toHaveProperty("kitchen.open");
    expect(houseForSale).not.toHaveProperty(["kitchen", "open"]);
    expect(houseForSale).toHaveProperty(["kitchen", "nice.oven"]);
    expect(houseForSale).toHaveProperty(["ceiling.height"], 2);
    expect({name: 'Peter Parker'}).toHaveProperty('name', expect.stringMatching(/peter/i))
})

test("toBeCloseTo", () => {
    // expect(0.2 + 0.1).toBe(0.3); fails !!!
    expect(0.2 + 0.1).toBeCloseTo(0.3);
    expect(1.01).toBeCloseTo(1.02, 1);
})

test("toBeDefined", () => {
    expect(null).toBeDefined();
    expect(undefined).not.toBeDefined();
})
test("toBeFalsy", () => {
    expect(0).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(null).toBeFalsy();
    expect("").toBeFalsy();
    expect(false).toBeFalsy();
    expect(NaN).toBeFalsy();
})

test("toBeInstanceOf", () => {
    class A {
    }

    expect(new A()).toBeInstanceOf(A);
    expect(() => {
    }).toBeInstanceOf(Function);
})
