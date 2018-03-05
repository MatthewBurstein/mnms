var it = function(description) {
  this.description = description

  this.expect = function(expectedValue) {
    this.expected = expectedValue;
    return this;
  };

  this.toEqual = function(actual) {
    this.actual = actual;
    this._displayDescription();
    if (this.expected === actual) {
      return true;
    } else {
      return false;
    }
  };

  this._displayDescription = function() {
    console.log(description);
    console.log(this.expected, "expected to equal", this.actual)
  };
  return this;
};
