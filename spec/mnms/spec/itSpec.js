var undefinedVar;

it("has property toEqual", () => {
  expect(it.toEqual).not(toEqual(undefinedVar));
});

describe(".toEqual", () => {

  beforeEach( () => {
    console.log("inside before each");
  });

  it("expects 1 to equal 1", () => {
    expect(1).toEqual(1);
  });

  it("expects 1 not to equal 1", () => {
    expect(1).toEqual(2);
  });

  it("expects ['a', 1] to equal ['a', 1]", () => {
    expect(['a', 1]).toEqual(['a', 1]);
  });

  it("expects ['a', [1, {'b': 2} ]] to equal  ['a', [1, {'b': 2} ]]", () => {
    expect( ['a', [1, {'b': 2} ]]).toEqual( ['a', [1, {'b': 2} ]]);
  });
});

describe(".toContain", () => {
  it("expects [1, 2, 3] to contain 2", () => {
    expect([1,2,3]).toContain(1);
  });
});

describe(".toEqual", () => {
  it("expects [1,2,3] to equal [1,2,3]", () => {
    expect([1,2,3]).toEqual([1,2,3]);
  });
});

describe(".toEqual", () => {
  it("expects [1,2,3] to not equal [4,5,6]", () => {
    expect([1,2,3]).not(toEqual([4,5,6]));
  });
});

// describe(".typeof", () => {
//   it("expects 1 to be a number").expect('mu').toBeA(String);
// })
//
// describe(".typeof", () => {
//   it("expects [1,2,3] to be an array").expect([1,2,3]).toBeA('string');
// })

describe("description", () => {
  it("[1, 2, 3] contains 2", () => {
    expect([1,2,3]).toContain(2);
  });
});

// describe("descroption", it("has .not()").expect(true).toEqual(it("").expect(true).not(toEqual(false)));