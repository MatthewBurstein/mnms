Note = function(body){
  this.body = body;
  console.log(body);
  this.abbreviation = body.substr(0, 20);
};
