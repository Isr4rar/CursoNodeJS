test('Deve conhecer as principais assertivas do jest', () => {
    let number = null;
    expect(number).toBeNull(); //validar se é null
    number = 10;
    expect(number).not.toBeNull(); //validar se não é null
    expect(number).toBe(10);//validar se é 10
    expect(number).toEqual(10);//validar se é 10
    expect(number).toBeGreaterThan(9); //validar se é maior que 9
    expect(number).toBeLessThan(11); //validar se é menor que 11
});

test('Devo saber trabalhar com objetos', () => {
    const obj = { name: "John", email: "john@gmail.com"};
    expect(obj).toHaveProperty('name'); //validar propriedade "name"
    expect(obj).toHaveProperty('name', 'John');
    expect(obj.email).toBe('john@gmail.com');

    const obj2 = { name: "John", email: "john@gmail.com"};
    expect(obj).toEqual(obj2);
});