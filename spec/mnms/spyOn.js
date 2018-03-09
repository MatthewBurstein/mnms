(function(module) {

  console.log(module)

  var spyOn = function(object, method) {
    let spyInternal = {
      arrayOfArguments: [],
      numberOfTimesCalled: 0
      // calledWith: function (expectedArguments) {
      //   return expectedArguments === args;
      // }
    };

    let original = object[method];
    object[method] = function() {
      let args = [].slice.apply(arguments)
      spyInternal.arrayOfArguments.push(args);
      spyInternal.numberOfTimesCalled = spyInternal.arrayOfArguments.length;
      return original.call(object, args);
    };

    module.spy = spyInternal;
  }

  module.spyOn = spy
})(this);
