var beforeEachCallback;
const beforeEach = function(callback) {
  beforeEachCallback = callback;
}

var output = function(description) {
  var node = document.createElement("P");
  var textnode = document.createTextNode(description);
  console.log(textnode);
  node.appendChild(textnode);
  document.getElementById("content").appendChild(node);
};



var it = function(description, expectAndMatcher) {
  console.log('\tIt', description);
  output('It ' + description);
  if (beforeEachCallback !== undefined) {
    beforeEachCallback()
  }
  expectAndMatcher();
};

var expect = function(expectedValue) {
  this.expected = expectedValue;

  this.toHaveBeenCalled = function() {
    console.log(this)
    // this._diplayExpectedActual();
    if (spy !== undefined && spy.count() > 0) {
      console.log("success")
      // this._displaySuccessMessage("was called successfully")
    } else {
      console.log("failure")
      this._displaySuccessMessage("was not called")
    }
  }

  this.toEqual = function(actual) {
    console.log(this);
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
    console.log(this.expected);
    var outputExpected = 'Expected: ' + this.expected;
    var outputActual = 'Got: ' + this.actual
    output(outputExpected);
    output(outputActual);
  };

  this._displaySuccessMessage = function(successString) {
    console.log("%c\t\tTest passed. ", "color: green; background-color: #c5ffb2;", this.expected, successString, this.actual)
    var successMessage= 'Test passed ' + this.expected + successString + this.actual;
    output(successMessage);
  }

  this._displayErrorMessage = function(errorString) {
    console.error("\t\tTest failed. ", this.expected, errorString, this.actual);
    var errorMessage= 'Test failed ' + this.expected + errorString + this.actual;
    output(errorMessage);
  };

  return this;

}
