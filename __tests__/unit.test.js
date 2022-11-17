// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('checks phone number', () => 
{
    expect(functions.isPhoneNumber('951-951-9519')).toBe(true);
});
test('checks phone number', () => 
{
    expect(functions.isPhoneNumber('304-234-2424')).toBe(true);
});
test('checks phone number', () => 
{
    expect(functions.isPhoneNumber('329519519519')).toBe(false);
});
test('checks phone number', () => 
{
    expect(functions.isPhoneNumber('999999999999')).toBe(false);
});

test('checks email address', () => 
{
    expect(functions.isEmail('mchera@ucsd.edu')).toBe(true);
});
test('checks email address', () => 
{
    expect(functions.isEmail('mchera@gmail.com')).toBe(true);
});
test('checks email address', () => 
{
    expect(functions.isEmail('jedi.com')).toBe(false);
});
test('checks email address', () => 
{
    expect(functions.isEmail('iamgeneralkenobi@')).toBe(false);
});

test('checks password', () => 
{
    expect(functions.isStrongPassword('ab3_3')).toBe(true);
});
test('checks password', () => 
{
    expect(functions.isStrongPassword('i43djof3f4')).toBe(true);
});
test('checks password', () => 
{
    expect(functions.isStrongPassword('1fieajfj')).toBe(false);
});
test('checks password', () => 
{
    expect(functions.isStrongPassword('a111111111111112')).toBe(false);
});

test('checks date', () => 
{
    expect(functions.isDate('11/20/2022')).toBe(true);
});
test('checks date', () => 
{
    expect(functions.isDate('1/1/2023')).toBe(true);
});
test('checks date', () => 
{
    expect(functions.isDate('11/20/2022/32')).toBe(false);
});
test('checks date', () => 
{
    expect(functions.isDate('11/20')).toBe(false);
});

test('checks hex color', () => 
{
    expect(functions.isHexColor('fc9')).toBe(true);
});
test('checks hex color', () => 
{
    expect(functions.isHexColor('fc9fff')).toBe(true);
});
test('checks hex color', () => 
{
    expect(functions.isHexColor('fc9erad')).toBe(false);
});
test('checks hex color', () => 
{
    expect(functions.isHexColor('fc')).toBe(false);
});