// var undefinedVar
//
// it("has property toEqual").expect(it.toEqual).not.toEqual(undefinedVar)
describe(".toEqual", it("expects 1 to equal 1").expect(2).toEqual(1));

describe(".toContain", it("expects [1, 2, 3] to contains 2").expect([1,2,3]).toContain(4));

describe(".typeof", it("expects 1 to be a number").expect('mu').toBeA('number'));

describe(".typeof", it("expects [1,2,3] to be an array").expect([1,2,3]).toBeA('number'));
