List = function(){
  this.notes = []
};

List.prototype.addNote = function(note) {
  this.notes.push(note);
}
