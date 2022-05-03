const add = (a, b)=> {
    return a + b;
}



test('should add 2 nums', () => { 
    const result = add(3, 4);
    expect(result).toBe(7);
});