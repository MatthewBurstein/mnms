var it = function(description) {
  this.description = description;

  this.expect = function(expectedValue) {
    this.expected = expectedValue;
    return this;
  };

  this.toEqual = function(actual) {
    this.actual = actual;
    this._displayDescription();
    if (this.expected === actual) {
      return this.expected === actual;
    } else if (this.actual instanceof Array) {
      return JSON.stringify(actual) === JSON.stringify(this.expected);
    } else {
      console.log('Failed test: ' + this.expected + ' not equal to ' + this.actual);
    }
  };

  this.toContain = function(actual) {
    this.actual = actual;
    this._displayDescription();
    if (this.expected.includes(actual)) {
      return this.expected === actual;
    } else {
      console.log('Failed test: ' + this.expected + ' does not contain ' + this.actual);
    }
  };

  this.not = function(matcher) {
    return !matcher;
  };

  this._displayDescription = function() {
    console.log('It', description);
    console.log('Expected: ', this.expected, "\n  Got: ", this.actual);
  };

  // // something is wrong with toBeA
  // this.toBeA = function(actual) {
  //   this.actual = actual;
  //   this._displayDescription();
  //   console.log(typeof(this.actual));
  //   console.log(typeof(this.expected));
  //   if (this.expected instanceof actual) {
  //     return true;
  //   } else {
  //     console.log('Failed test: ' + this.expected + ' is not an instance of ' + this.actual);
  //   }
  //
  // };


  // Remove this
  // function test() {
  //     document.getElementById('content').innerHTML = '<p>' + this.expected + '</p>';
  //
  // }
  // window.onload = test;
  //
  return this;

};
