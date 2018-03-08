var spyOn = function(object, method) {
  let spy = {
    args: [],
    count: function() {
      return this.args.length;
    }
  };

  let original = object[method];
  object[method] = function() {
    let args = [].slice.apply(arguments)
    spy.args.push(args);
    spy.count();
    return original.call(object, args);
  };

  return Object.freeze(spy);

}
