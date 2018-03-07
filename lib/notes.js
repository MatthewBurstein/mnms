Note = function(){
  this.body = ""
  this.abbreviation = ""
};

Note.prototype.create = function(text) {
  this.body = text;
};

Note.prototype.abbreviate = function() {
  this.abbreviation = this.body.substr(0, 20)
};
