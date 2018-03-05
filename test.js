var expect = function() {
  this.value = inputExpression;
};

expect.("__proto__").prototype.toEqual = function(actual) {
  return this.value === actual;
};

Expect.prototype.toContain = function(testValue) {
  let isContainedIn = false;
  this.value.forEach(function(element){
    if (testValue === element) {
      isContainedIn = true;
    }
  });
  return isContainedIn;
};

expect = new Expect();
