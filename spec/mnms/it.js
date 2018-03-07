var it = function(description, callback) {
  console.log('\tIt', description);
  callback();
};

var expect = function(expectedValue) {
  this.expected = expectedValue;

  this.toEqual = function(actual) {
    this.actual = actual;
    this._displayExpectedActual();
    if (this.expected === actual) {
      this._displaySuccessMessage(' equals ')
    } else if (this.actual instanceof Array) {
      JSON.stringify(actual) === JSON.stringify(this.expected) ?
        this._displaySuccessMessage(" equals ") :
        this._displayErrorMessage(" is not equal to ");
    } else {
      this._displayErrorMessage(' not equal to ');
    }
  };

  this.toContain = function(actual) {
    this.actual = actual;
    this._displayExpectedActual();
    if (this.expected.includes(actual)) {
      this._displaySuccessMessage(" contains ")
    } else {
      this._errorMessage(' does not contain ')
    }
  };

  this.not = function(matcher) {
    return !matcher;
  };

  this._displayExpectedActual = function() {
    console.log('\t\tExpected: ', this.expected, "\n\t\tGot: ", this.actual);
  };

  this._displaySuccessMessage = function(successString) {
    console.log("%c\t\tTest passed. ", "color: green; background-color: #c5ffb2;", this.expected, successString, this.actual)
  }

  this._displayErrorMessage = function(errorString) {
    console.error("\t\tTest failed. ", this.expected, errorString, this.actual);
  };

  return this;

}

var beforeEach = function(callback) {
  this.beforeEachTest = true;
  callback();
};
