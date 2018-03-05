var it = function(description) {
  this.description = description

  this.expect = function(expectedValue) {
    this.expected = expectedValue;
    return this;
  };

  this.toEqual = function(actual) {
    this.actual = actual;
    this._displayDescription();
    return this.expected === actual
  };

  this.toContain = function(actual) {
    this.actual = actual;
    this._displayDescription();
    return this.expected.includes(actual);
  };

  this.not = function(matcher) {
    return !matcher;
  };

  this._displayDescription = function() {
    console.log(description);
    console.log('Expected: ', this.expected, "\n  Got: ", this.actual)
  };

  return this;
};
