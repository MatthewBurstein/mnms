list = new List()

document.getElementById("add-note").onclick = function() {
  note = new Note(document.getElementById('note-body').value, list.notes.length)
  list.addNote(note)
  displayNotes()
  document.getElementById('note-body').value = ""
  return false;
}

function displayNotes() {
  var output = ""
  for (index = 0; index < list.notes.length; ++index) {
    output += '<a href="#' + list.notes[index].id + '">' + list.notes[index].abbreviation + "</a>" + "<br>"
  }

  document.getElementById('note-list').innerHTML = output
}



makeUrlChangeShowNoteForCurrentPage();

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
};

function showNoteForCurrentPage() {
  showNote(getNoteFromUrl(window.location));
};

function getNoteFromUrl(location) {
  return location.hash.split("#")[1];
};

function showNote(note) {
  console.log(note);
  for (index = 0; index < list.notes.length; ++index) {
    console.log(list.notes[0].id);
    if (note === list.notes[index].id) {
      var noteBody = list.notes[index].body
    }
  }
  document.getElementById("note-body").innerHTML = noteBody;
};
