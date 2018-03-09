list = new List()

document.getElementById("add-note").onclick = function() {
  note = new Note(document.getElementById('note-body').value)
  list.addNote(note)
  displayNotes()
  document.getElementById('note-body').value = ""
  return false;
}

function displayNotes() {
  var output = ""
  for (index = 0; index < list.notes.length; ++index) {
    output += "<p>" + list.notes[index].abbreviation; + "</p>"
  }

  document.getElementById('note-list').innerHTML = output
}
