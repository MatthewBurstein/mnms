var note = new Note();

note.create("123456789012345678901234567890")
describe("note.create", it("creates a note with the text hello").expect(note.body).toEqual("123456789012345678901234567890"));

note.abbreviate()
describe("note.abbreviation", it("gets the first 20 characters of the note").expect(note.abbreviation).toEqual("12345678901234567890"))
