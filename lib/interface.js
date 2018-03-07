var textArea = '<form id="myForm"><label for="myName">Send me your name:</label><input id="myName" name="name" value=""><textarea rows="4" cols="50" name="comment" form="myForm"></textarea><input type="submit" value="Send Me!"></form>'

function createNote() {
  console.log(document.getElementById("text"));
  document.getElementById("text").innerHTML = textArea;
}
