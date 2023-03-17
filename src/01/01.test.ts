import {splitString, sum} from "./01";

//data
let a: number = 4;
let b: number = 5;

beforeEach(() => {
    a = 4;
    b = 5;
})

test('Check the correctness of two numbers sum', () => {

//action
    let resultSum = sum(a, b)

//expecting result
    expect(resultSum).toBe(9)
})

test('Check the correctness of split a sentences', () => {

//data
    const stringA = 'Hello, how are you?';
    const stringB = 'Hello, how are   you?';

//action
    let resultSplit = splitString(stringA)
    let resultSplit2 = splitString(stringB)

//expecting result
    expect(resultSplit[0]).toBe('Hello,');
    expect(resultSplit[1]).toBe('how');
    expect(resultSplit[2]).toBe('are');
    expect(resultSplit[3]).toBe('you?');

    expect(resultSplit2[1]).toBe('how');
    expect(resultSplit2[2]).toBe('are');
    expect(resultSplit2[3]).toBe('');
    expect(resultSplit2[4]).toBe('');
    expect(resultSplit2[5]).toBe('you?');
})
